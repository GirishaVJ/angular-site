import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CursorService } from '../../services/cursor.service';

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
      img: './assets/images/achievements-four.jpg',
      text:
        'Ganit visits <span class="clr-black">top Engineering and Math colleges</span> to recruit fresh & exciting talent',
    },
    {
      img: './assets/images/dr_sinha.jpeg',
      text:
        'Welcoming <span class="clr-black">Dr. Sinha</span> to Board of Advisors',
    },
    {
      img: './assets/images/ganit_Carnival.jpeg',
      text:
        'Ganit Carnival: Celebrating Data Science',
    },
    {
      img: './assets/images/data_distruption.jpg',
      text:
        'Data science disruption has a new epicenter: Ganits new abode',
    }
  ];
  constructor(public crsr: CursorService) {

  }

  ngOnInit(): void {}
}
