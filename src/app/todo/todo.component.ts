import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  items=['やること1', 'やること2', 'やること3']

  ngOnInit(): void {
  }

  addTodo(todo:string): void {
    this.items.push(todo);
  }

  removeTodo(todo:string): void {
    let idx = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == todo) {
        idx = i;
      }
    }
  if (idx != -1) {
          this.items.splice(idx, 1);
        }
      }


}
