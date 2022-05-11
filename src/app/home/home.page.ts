import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

// Set up stages to control what components to show to the user
/* The stages are:
  0: initialize
  1: gender selection
  2: temperature selection
  3: air quality selection
  4: humidity selection
  5: thank you confirmation
*/
stage:number;

// Set up user object / REDO THIS

user = {
    id: "",
    gender: 0,
    timecode: new Date(),
    temperature: 0,
    airquality: 0,
    humidity: 0
  }

  ngOnInit(): void {
    console.log(this.storedAnswers);
    // Stage 0; set up user object
    this.stage = 0; 

  // Check User Id; If new user, create new userId. 
    if (localStorage.getItem('mentalShowerUserId')) {
      this.user.id = localStorage.getItem('mentalShowerUserId');
    } else {
      this.user.id = Math.random().toString(36).substring(2,28);
      localStorage.setItem('mentalShowerUserId', this.user.id);
    }

    // go to next stage
  this.stage++;
  
  }

// array for the read answers from firestore
  storedAnswers = [];




  
 

// answer method, passing the category and the selected value as a number
answer(cat:string, val:number) {

  if(cat=="gender"){
    this.user.gender = val;
  }

  if(cat=="temperature"){
    this.user.temperature = val;
  }

  if(cat=="airquality"){
    this.user.airquality = val;
  }

  if(cat=="humidity"){
    this.user.humidity = val;
    this.sendAnswers();
  }

  // go to next stage
  this.stage++;
};



  constructor(private dataService: DataService, private alertCtrl: AlertController) {
 

    // Get all answers from all users
    this.dataService.getAnswers().subscribe(res => {
      console.log(res);
      this.storedAnswers = res; 
    })
  }


  // Store user data and survey answers
  async sendAnswers() {

    console.log(this.user);
    this.dataService.storeAnswers({
      userId: this.user.id,
      gender: this.user.gender,
      timecode: Timestamp.now(),
      temperature: this.user.temperature,
      airquality: this.user.airquality,
      humidity: this.user.humidity
    });




  }


}
