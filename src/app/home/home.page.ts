import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



// Set up stages
stage:number;
// dismissable:boolean = false;

// Set up user
  user = {
    id: "",
    gender: 0,
    temperature: 0,
    airquality: 0,
    humidity: 0
  }

  ngOnInit(): void {
    // Stage 0; set up user object
    this.stage = 0; 

  // Check User Id; If new user, create new Id. 

    if (localStorage.getItem('mentalShowerUserId')) {
      this.user.id = localStorage.getItem('mentalShowerUserId');
    } else {
      this.user.id = Math.random().toString(36).substring(2,28);
      localStorage.setItem('mentalShowerUserId', this.user.id);
    }

this.stage++;
console.log(this.stage);
 
  }


  notes = []; 



  /* The stages are:
  0: init
  1: gender selection
  2: temperature selection
  3: air quality selection
  4: humidity selection
  5: thank you confirmation
*/
 

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
  }


  this.stage++;
};



  constructor(private dataService: DataService, private alertCtrl: AlertController) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res; 
    })
  }

  openNote(note) {}

  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Add Note',
      inputs: [
        {
          name: 'title',
          placeholder: 'my note title',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'my note text',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel,'
      },
      {
        text: 'Add',
        handler: (res) => {
          this.dataService.addNote({title: res.title, text: res.text})
        }
      }
    ]
    });
    await alert.present();
  }

}
