import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CursorService } from '../../services/cursor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owl',
  templateUrl: './owl.component.html',
  styleUrls: ['./owl.component.scss'],
})
export class OwlComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 30,
    nav: true,
    navText: [
      "<i class='icon icon-arrow-left'></i>",
      "<i class='icon icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
  };
  slides = [
    {
      id: 1,
      img: './assets/images/achievements-four.jpg',
      text:
        'Ganit visits <span class="clr-black">top Engineering and Math colleges</span> to recruit fresh & exciting talent',
    },
    {
      id: 2,
      img: './assets/images/dr_sinha.jpeg',
      text:
        'Welcoming <span class="clr-black">Dr. Sinha</span> to Board of Advisors',
    },
    {
      id: 3,
      img: './assets/images/ganit_Carnival.jpeg',
      text: 'Ganit Carnival: Celebrating Data Science',
    },
    {
      id: 4,
      img: './assets/images/data_distruption.jpg',
      text: 'Data science disruption has a new epicenter: Ganits new abode',
    },
  ];
  constructor(public crsr: CursorService, public router: Router) {}

  ngOnInit(): void {}

  showDetails(id) {
    this.router.navigate(['/news-details', id]);
  }
}
