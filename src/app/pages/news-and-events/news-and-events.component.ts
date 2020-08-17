import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss'],
})
export class NewsAndEventsComponent implements OnInit {
  constructor(public router: Router) {}
  newsAndEvents = [
    {
      id: 1,
      url: 'ganit-visits-top-engineering-and-Math-colleges-to-recruit-fresh-exciting-talent',
      img: './assets/images/achievements-four.jpg',
      text:
        'Ganit visits <span class="clr-black">top Engineering and Math colleges</span> to recruit fresh & exciting talent',
    },
    {
      id: 2,
      url: 'welcoming-dr-sinha-to-board-of-advisors',
      img: './assets/images/dr_sinha.jpeg',
      text:
        'Welcoming <span class="clr-black">Dr. Sinha</span> to Board of Advisors',
    },
    {
      id: 3,
      url: 'ganit-carnival-celebrating-data-science',
      img: './assets/images/ganit_Carnival.jpeg',
      text: 'Ganit Carnival: Celebrating Data Science',
    },
    {
      id: 4,
      url: 'data-science-disruption-has-a-new-epicenter-ganits-gnew-abode',
      img: './assets/images/data_distruption.jpg',
      text: 'Data science disruption has a new epicenter: Ganits new abode',
    },
  ];
  ngOnInit(): void {
    AOS.init();
  }
  showDetails(url) {
    this.router.navigate(['/news-and-events',url]);
  }
}
