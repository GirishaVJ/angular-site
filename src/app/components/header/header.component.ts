import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleMenu = null;
  constructor(private router: Router) {
    this.pageScroll();
  }

  ngOnInit() {}

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
    };
  }

  redirect(page) {
    this.router.navigate([page]);
    this.toggleMenu = false;
  }
}
