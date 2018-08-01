import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  profiles = [
    {
      type: "Родитель",
      icon: "user-tie"
    },
    {
      type: "Ребёнок",
      icon: "child"
    },
    {
      type: "Репетитор",
      icon: "user-graduate"
    }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/account']);
  }
}
