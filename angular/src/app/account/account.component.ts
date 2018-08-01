import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Output() loggedOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.loggedOut.emit('logged out');
  }
}
