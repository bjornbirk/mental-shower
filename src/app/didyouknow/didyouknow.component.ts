import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-didyouknow',
  templateUrl: './didyouknow.component.html',
  styleUrls: ['./didyouknow.component.scss'],
})
export class DidyouknowComponent implements OnInit {

  cardPart = 0;
  temperatureCard = 0;
  toggleProperty = [false, false, false, false];
  constructor() { }

  ngOnInit() {
    console.log(this.toggleProperty[1]);
  }

  changeCards(){
    this.cardPart++;
    console.log(this.cardPart);
  }
  toggle(cardId:number) {

    if(this.toggleProperty[cardId] == false) {
      this.toggleProperty[cardId] = true;
      if (cardId == 1) {
        this.temperatureCard++;
  
        if (this.temperatureCard == 3) {
          this.temperatureCard = 1;
        }

      } // temperature

    } else {
      this.toggleProperty[cardId] = false;
    }

    

  }


}
