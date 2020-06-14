import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
        items: 4,
      },
    },
  };
  slides = [
    {
      img: './assets/images/achievements-four.jpg',
      text:
        '<p>Ganit visits<span class="clr-blue">top engineering & math colleges</span>to recruit fresh & exciting talent</p>',
    },
    {
      img: './assets/images/achievements-four.jpg',
      text:
        '<p>Ganit visits<span class="clr-blue">top engineering & math colleges</span>to recruit fresh & exciting talent</p>',
    },
    {
      img: './assets/images/achievements-four.jpg',
      text:
        '<p>Ganit visits<span class="clr-blue">top engineering & math colleges</span>to recruit fresh & exciting talent</p>',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
