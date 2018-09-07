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
  /**
   * Binds with the datepicker in the HTML
   */
  countDownTo: Date;
  /**
   * Binds with the days span in HTML
   */
  days: number;
  /**
   * Binds with the hours span in HTML
   */
  hours: number;
  /**
   * Binds with the minute span in HTML
   */
  minutes: number;
  /**
   * Binds with the seconds span in HTML
   */
  seconds: number;
  /**
   * This is function variable to invoke an anonymous function in setInterval()
   */
  countdown;
  /**
   * This holds the selected date in unix time format i.e. Number of miliseconds passed
   * since 1st January 1970
   */
  selecteddate: number;

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
      
      if (this.countDownTo instanceof Date){
        this.selecteddate = this.countDownTo.getTime()
        this.countdown = setInterval(function(){
          var timenow:number = new Date().getTime();
          var timedifference:number = self.selecteddate - timenow;
          if(timedifference > 0){
            self.days = Math.floor(timedifference/(1000*60*60*24));
            self.hours = Math.floor((timedifference%(1000*60*60*24))/(1000*60*60));
            self.minutes = Math.floor((timedifference%(1000*60*60))/(1000*60));
            self.seconds = Math.floor((timedifference%(1000*60))/(1000));
          }
          else{
            clearInterval(self.countdown);
            self.resetElements(self)
          }
        },1000);
      } else{
        self.selecteddate = 0
        this.resetElements(self)
      }
  }

  /**
   * Resets the countdown elements to 0Days 0Hours 0Minutes and 0Seconds
   * @param $scope The scope in which this function will execute
   */
  resetElements($scope){
      $scope.days = 0
      $scope.hours = 0;
      $scope.minutes = 0;
      $scope.seconds = 0;
  }
}
