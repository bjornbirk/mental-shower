import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardgame',
  templateUrl: './cardgame.component.html',
  styleUrls: ['./cardgame.component.scss'],
})
export class CardgameComponent implements OnInit {

currentCard:number = 0;
isCompleted:boolean = false;
answerIsCorrect:number = 0;
score:number = 0;

cards = [
  {
    id: 1,
    header: 'that temperature can affect concentration?',
    text: "When a room is at a Low or High Temperature our bodies use more energy to balance the body temperature with the room temperature so it affects our power of concentraion as we do not have enough energy to focus. The optimal temperature for working/studying is between 21-23 celsius degrees.",
    question: 'What affects concentration?',
    answer: 'Temperature',
    answeredCorrectly: false
  },
  {
    id: 2,
    header: 'that personal weight can affect temperature perception?',
    text: "A person's weight, specifically body mass index or BMI, can affect how they react to temperature. Those who weigh more will feel warm more quickly, while those with lower-than-average BMI usually get cold easier.",
    question: 'What perception does personal weight affect?',
    answer: 'Temperature',
    answeredCorrectly: false
  }
];

  // set state of card
  cardTurned = false;
  // toggle card turn state
  turnCard() {
    this.cardTurned = true;
  };


  cardAnswer(cardAnswer:string) {
    if (cardAnswer == this.cards[this.currentCard].answer) {
      this.answerIsCorrect = 1;
      this.score++;
    } else {
      this.answerIsCorrect = 2;
    }

  }

  newCard() {
    if (this.currentCard >= this.cards.length){
      this.isCompleted = true;
  } else {
    this.isCompleted = false;
    this.currentCard++;
  }
    this.cardTurned = false;
    this.answerIsCorrect = 0;

  }


  constructor() { }

  ngOnInit() {
    console.log(this.currentCard, this.cards.length);
  }

}
