import { Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'Count Down App';
  countDownTo: Date;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  countdown;

  ngOnInit(){
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  /**
   * This function is called when a date is selected in the datepicker
   */
  onSelectCountDownToDate(){
      var self = this // Capture the current scope in self variable to be used in anonymous function
      this.countdown = setInterval(function(){
      var timenow:number = new Date().getTime();
      var diff:number = self.countDownTo.getTime() - timenow;
      self.days = Math.floor(diff/(1000*60*60*24));
      self.hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
      self.minutes = Math.floor((diff%(1000*60*60))/(1000*60));
      self.seconds = Math.floor((diff%(1000*60))/(1000));
      if(diff < 0){
        clearInterval(self.countdown);
        self.days = 0;
        self.hours = 0;
        self.minutes = 0;
        self.seconds = 0;
      }
    },1000);
  }
}
