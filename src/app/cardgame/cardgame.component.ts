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
    header: 'that temperature can affect concentration?',
    text: "When a room is at a Low or High Temperature our bodies use more energy to balance the body temperature with the room temperature so it affects our power of concentraion as we do not have enough energy to focus. The optimal temperature for working/studying is between 21-23 celsius degrees.",
    question: 'Which of the following options affects concentration?',
    answer: 'Temperature',
    answeredCorrectly: false
  },
  {
    header: 'that personal weight can affect temperature perception?',
    text: "A person's weight, specifically body mass index or BMI, can affect how they react to temperature. Those who weigh more will feel warm more quickly, while those with lower-than-average BMI usually get cold easier.",
    question: 'What perception does personal weight affect?',
    answer: 'Temperature',
    answeredCorrectly: false
  },
  {
    header: 'that Low temperature can cause respiratory problems?',
    text: "It's a simple equation. Cold interior home temperatures + an accumulation of moisture = condensation, which in turn leads to mold. Mold inhalation is bad, bad news for a whole host of respiratory problems such as allergic rhinitis, asthma, emphysema, and bronchitis.",
    question: 'Which of the following options, can cause respiratory problems?',
    answer: 'Temperature',
    answeredCorrectly: false
  },
  {
    header: 'that Low Temperature can cause heart disease?',
    text: "Cold temperatures tend to raise blood pressure and heart rate, which is especially dangerous for those already suffering from heart disease.",
    question: 'Which of the following options, can cause heart disease?',
    answer: 'Temperature',
    answeredCorrectly: false
  },
  {
    header: 'that High Humidity can cause frizzy hair?',
    text: "High levels of moisture in the air can cause hair to curl and appear frizzy. You can use a straightener and hair products to fix it, but in extreme humidity, even those tools might not prove effective enough.",
    question: 'Which of the following options, can make your hair frizzy?',
    answer: 'Humidity',
    answeredCorrectly: false
  },
  {
    header: 'that Low Humidity can be determined by skin dryness?',
    text: "Your skin needs moisture to maintain its softness, and you might experience cracking and bleeding as well as roughness.",
    question: 'Which of the following options, can determine skin dryness?',
    answer: 'Humidity',
    answeredCorrectly: false
  },
  {
    header: 'that High Humidity can increase sweatiness?',
    text: "Since high humidity makes the temperature feel hotter than it actually is, your body responds as though the temperature increased. Even worse, excess humidity hampers sweat evaporation, so the moisture remains on your skin and you feel even warmer.",
    question: 'Which of the following options can increase sweatiness?',
    answer: 'Humidity',
    answeredCorrectly: false
  },
  {
    header: 'that Humidity affects your mental stimulation?',
    text: "Humidity can reduce mental stimulation/focus, when relative humidity (RH) levels are imbalanced, it can put exponentially more strain on our bodies, requiring them to work harder to function as they normally would.",
    question: 'Which of the following options can affect mental stimulation?',
    answer: 'Humidity',
    answeredCorrectly: false
  },
  {
    header: 'that Air Quality can cause headaches?',
    text: "Pesticides, household cleaners, paints, stove gas, CO are home products that are known to cause a headache. This happens when one is exposed to an elevated level of chemical fumes and strong odors in a short period of time. In the worse case scenario, it can trigger migraines and temporarily disable a person from work. Chemical fumes can also irritate our lungs, eyes, and nose that will further intensify our headache.",
    question: 'Which of the following options, can cause headaches?',
    answer: 'Air Quality',
    answeredCorrectly: false
  },
  {
    header: 'that Air Quality can cause fatigue and dizziness?',
    text: "An increased presence of airborne pollutants can lead to fatigue and dizziness. Inhaling to a high level of gaseous contaminants like CO, CO2, VOCs, Asbestos, Lead, and Radon can make the brain feel sluggish. You will feel light-headed, fatigued, dizzy, confused, and unable to concentrate or even perform simple activities such as talk and speak. Fortunately, this seldom happens unless there is a big spike of toxic fumes in the room due to a gas leak or something similar.",
    question: 'Which of the following options, can determinate fatique and dizziness?',
    answer: 'Air Quality',
    answeredCorrectly: false
  },
  {
    header: 'that Air Quality can cause nausea?',
    text: "Commonly associated with mold and mildew contaminants. When the air quality is so bad that it reeks, the scene of mustiness will make you nausea and wants to vomit. Worse still, the throwing up feeling will remain as the stench will not go away easily without proper ventilation or an air purifier. Medication is another alternative to temporary relief of the nauseating feel.",
    question: 'Which of the following options can cause nausea?',
    answer: 'Air Quality',
    answeredCorrectly: false
  },
  {
    header: 'hat Air Quality can cause cough, sneeze and sinus congestion?',
    text: "The most common symptoms of poor air quality that most would not associate with it. Every time we breathe in high harmful particles like dust, mold, pollen, and bacteria, our body will react to it by producing antibodies. As a result, we will experience irritation like coughing, sneezing, and congestion until the foreign substances are expelled. Mucus membranes will also be irritated that will impact our eyes (redness/ watery), mouth, tongue, throat, and nose (nosebleeds).",
    question: 'Which of the following options can determinate caugh, sneeze or sinus congestion?',
    answer: 'Air Quality',
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
    let x = this.cards.length
    if (this.currentCard >= x){
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
