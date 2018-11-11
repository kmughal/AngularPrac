import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FakeCustomerDetailService } from './services/custom-detail.service';
import { TodoService } from 'src/app/services/todo-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls : ['./customer-address.component.scss'],
  providers : [FakeCustomerDetailService, TodoService]
})
// tslint:disable-next-line:component-class-suffix
export class CustomerAddress {
  title = 'this is atest ok';
  names: Array<string>;
  todos = new Array<string>();

  constructor(private fakeService: FakeCustomerDetailService,private todoService: TodoService) {
    this.names = fakeService.names;
    this.todoService.todo$.subscribe(v => {
      alert(v);
      this.todos.push(v);
    });
  }

  showDetails($event) {
    console.log($event);
    alert('show details');
  }

  alertValue(value: string) {
    alert(value);
  }
}
