import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

  constructor(private todoService: TodoService) {

  }
  addTodo(id: any, text: any, isCompleted: any) {
    const newTodo = {
      id: id,
      text: text,
      isCompleted: true
    }
    this.todoService.addTodo(newTodo);
  }
}
