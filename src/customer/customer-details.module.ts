import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerAddress } from './customer-address.component';
import { FakeCustomerDetailService } from './services/custom-detail.service';
import { TodoService } from 'src/app/services/todo-service';

@NgModule({
  imports : [CommonModule, FormsModule],
  declarations : [CustomerAddress],
  providers : [FakeCustomerDetailService, TodoService],
  exports : [CustomerAddress]
})
export class CustomerDetails {

}
