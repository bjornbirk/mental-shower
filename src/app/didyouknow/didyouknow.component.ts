import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-didyouknow',
  templateUrl: './didyouknow.component.html',
  styleUrls: ['./didyouknow.component.scss'],
})
export class DidyouknowComponent implements OnInit {

  toggleProperty = false;

  constructor() { }

  ngOnInit() {}

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

}
