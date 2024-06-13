import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Observable<Todo[]> | undefined;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.todo$;
  }

  deleteTodo(id: number) {
    this.todoService.deleteToDo(id);
  }

}
