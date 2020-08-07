import { Component, OnInit,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleMenu = null;
  windowHeight = null;
  scrollhide = false;
  constructor(private router: Router,public renderer:Renderer2) {
    window.onload = () => {};
    this.pageScroll();
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
    this.scrollhide = window.location.pathname=="/chat" ? true : false;
    console.log(window.location.pathname);
  }
  hambergarEvent(event){
    if(this.toggleMenu){
      this.renderer.removeClass(document.body,'scrollhide');
    }else{
      this.renderer.addClass(document.body,'scrollhide');
    }
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
      } else if(!this.scrollhide) {
        document.getElementById('scroll-arrow').style.opacity = '1';
      }
    };
  }

  redirect(page) {
    this.router.navigate([page]);
    this.renderer.removeClass(document.body,'scrollhide');
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
