import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleMenu = null;
  windowHeight = null;
  constructor(private router: Router) {
    window.onload = () => {};

    this.pageScroll();
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
    console.log(this.windowHeight);
  }

  pageScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('logo').style.opacity = '1';
      } else {
        document.getElementById('logo').style.opacity = '0';
      }
      prevScrollpos = currentScrollPos;

      //down arrow

      if (window.pageYOffset > 100) {
        document.getElementById('scroll-arrow').style.opacity = '0';
      } else {
        document.getElementById('scroll-arrow').style.opacity = '1';
      }
    };
  }

  redirect(page) {
    this.router.navigate([page]);
    this.toggleMenu = false;
  }

  onPageScrollClick() {
    window.scroll({
      top: this.windowHeight - 10,
      left: 0,
      behavior: 'smooth',
    });
  }
}
