import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector : 'app-timer',
  templateUrl : './timer.component.html'
})
export class TimerComponent implements OnInit {
  ngOnInit() {
    setInterval(()=>{
      this.timeInString = new Date().toTimeString();
    }, 10);
  }

 

  timeInString = '';
  
}
