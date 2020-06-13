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
    //slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
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
    {
      img: './assets/images/minds-img.jpg',
      text:
        '<p>Ganit visits<span class="clr-blue">top engineering & math colleges</span>to recruit fresh & exciting talent</p>',
    },
    {
      img: './assets/images/minds-img.jpg',
      text:
        '<p>Ganit visits<span class="clr-blue">top engineering & math colleges</span>to recruit fresh & exciting talent</p>',
    },
    {
      img: './assets/images/minds-img.jpg',
      text:
        '<p>Ganit visits<span class="clr-blue">top engineering & math colleges</span>to recruit fresh & exciting talent</p>',
    },
  ];

  ngOnInit() {}
  loadSlider() {}

  onResize(e) {}
}
