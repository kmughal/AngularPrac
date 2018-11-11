import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './hello-world.component';
import { CustomerDetails } from 'src/customer/customer-details.module';
import { Timer } from 'src/timer/timer.main';
import { LineStatusModule } from 'src/line-status/line-status.main';
import { TodoService } from './services/todo-service';

@NgModule({
  declarations: [AppComponent, HelloWorld],
  imports: [BrowserModule, AppRoutingModule, CustomerDetails, Timer, LineStatusModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
