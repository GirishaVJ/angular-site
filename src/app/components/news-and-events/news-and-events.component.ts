import { Component, OnInit } from '@angular/core';
import { swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss'],
})
export class NewsAndEventsComponent implements OnInit {
  constructor() {}
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  };

  slides = [
    'https://via.placeholder.com/500x200/FF5733/ffffff',
    'https://via.placeholder.com/500x200/C70039/ffffff',
    'https://via.placeholder.com/500x200/900C3F/ffffff',
  ];

  ngOnInit() {}
}
