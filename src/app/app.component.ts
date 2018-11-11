import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 // providers : [TodoService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Test app';
  heading = 'hello';
  linesStatusHasBeenLoaded = false;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    console.log('ng-init');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

  linesLoaded(linesLoaded) {
    setTimeout(() => {
      this.linesStatusHasBeenLoaded = linesLoaded;
    }, 1000);
  }

  addTodo(todos) {
    this.todoService.add(todos.value);
    todos.value = '';
  }
}
