import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss'],
})
export class NewsAndEventsComponent implements OnInit {
  constructor() {}

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
