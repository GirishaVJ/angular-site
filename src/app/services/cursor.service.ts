import { Injectable, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  top: any;
  left: any;
  display: string;
  pos1: any;
  fixedElementFlag = false;
  footerHight = 0;

  titleScrollPosition = {
    left: 0,
    top: 0,
  };

  isHyperlink = false;

  constructor() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    this.textScroll(event);
    this.pos1 = Number(event.srcElement.scrollingElement.scrollTop * 0.5);
    if (event.srcElement.scrollingElement.scrollTop > 700) {
      this.fixedElementFlag = true;
    } else {
      this.fixedElementFlag = false;
    }
  };

  showCustomCursor(event) {
    this.top = event.clientY - 5 + 'px';
    this.left = event.clientX - 5 + 'px';
    this.display = 'block';

    if (
      event.target.tagName.toLowerCase() === 'a' ||
      event.target.tagName.toLowerCase() === 'span'
    ) {
      this.isHyperlink = true;
    } else {
      this.isHyperlink = false;
    }
  }

  hideCusromCursor(event) {
    this.display = 'none';
  }

  textScroll(event) {
    this.titleScrollPosition.left =
      event.srcElement.scrollingElement.scrollLeft;
    this.titleScrollPosition.top = event.srcElement.scrollingElement.scrollTop;
    // console.log(this.titleScrollPosition);
  }
}
