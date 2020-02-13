import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

let _id = 1;

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  userInput: FormGroup;
  todoItem = new FormControl();
  todos: Array<ITodo> = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.userInput = this.fb.group({
      todoItem: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onChange() {
    const {value} = document.getElementById();
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      console.log(this.todos);
      this.todoItem.setValue('');
    }
  }


}
