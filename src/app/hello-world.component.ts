import { Component, OnDestroy } from '@angular/core';
import { TodoService } from './services/todo-service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloWorld  implements OnDestroy {
  todos = new Array<string>();
  subscription: Subscription;
  constructor(private todoService: TodoService) {
    this.subscription = this.todoService.todo$.subscribe(v => {
      this.todos.push(`comming from Parent component ${v}`);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
