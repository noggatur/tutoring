import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Output() loggedIn = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.loggedIn.emit('logged in');
  }
}
