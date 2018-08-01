import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  tabs = [
    {
      title: "contacts",
      titleRus: "Контакты"
    },
    {
      title: "schedule",
      titleRus: "Расписание"
    },
    {
      title: "marks",
      titleRus: "Успеваемость"
    },
    {
      title: "sections",
      titleRus: "Секции"
    }
  ];
  selectedTab = this.tabs[0].title;

  kids = [
    {
      name: "Вася",
      package: "Full"
    },
    {
      name: "Оля",
      package: "Бич"
    }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/']);
  }

  selectTab(event, tab) {
    event.preventDefault();
    this.selectedTab = tab;
  }
}
