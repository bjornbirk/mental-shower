import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Timestamp } from '@angular/fire/firestore';




@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  
  // array for the read answers from firestore
  storedAnswers = [];

//  num = 0;

// TO BE DONE
getValueName(zoneId:number, param:string) {
  let value = this.getAvgByZone(zoneId, param);
  let valueName:string = ""; 
if(param=="temperature") {
  if (value==1) {
    valueName = "Too warm";
  }
  if (value==2) {
    valueName = "A little warm";
  }
}
return valueName;
}


getNumberOfUniqueUsers(){
  return new Set(this.storedAnswers.map(x => x.userId)).size;
}

getAvgSurveysPerUser(){

  let uniqueUsers:number = this.getNumberOfUniqueUsers();
  let totalSurveys:number = this.storedAnswers.length;
  return Math.round(totalSurveys/uniqueUsers * 10) / 10;

}


getAvgByZone(zoneId:number, param:string) {
  // let zoneData = [];
  let sum:number = 0;
  let numberOfAnswers:number = 0;

    // Implement timeframe param
    //console.log(this.storedAnswers);
    var len:number = this.storedAnswers.length;
    for (var i=0; i<=len; i++) {
      // check for undefined array objects
      if (typeof(this.storedAnswers[i])!='undefined') {
        // push objects with zoneId to new array
        if (this.storedAnswers[i].zone == zoneId) {
          sum += this.storedAnswers[i][param];
          numberOfAnswers++;

          //zoneData.push(this.storedAnswers[i]);
        }

      }; // if ends
        
      
    } // for loop ends

    // console.log(sum, numberOfAnswers);
    // Return average
    return Math.round(sum/numberOfAnswers);


}

  constructor(private dataService: DataService, private router: Router,
    private route: ActivatedRoute) {

// Get all answers from all users
this.dataService.getAnswers().subscribe(res => {
  //console.log(res);
  this.storedAnswers = res; 
})


   }

  ngOnInit() {

//    this.getAnswersByZone(1, 'temperature')


  }

  
}
