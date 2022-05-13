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

getAnswersByZone(zoneId) {
  // Implement timeframe param
  return this.storedAnswers;
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



  }

  
}
