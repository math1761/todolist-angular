import {Component, Input, OnInit} from '@angular/core';
import {Todo } from '../classes/todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
}
