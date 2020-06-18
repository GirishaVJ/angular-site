import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  top: any;
  left: any;
  display: string;
  pos1: any;
  fixedElementFlag=false;
  footerHight=0;

  isHyperlink = false;
  constructor() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    this.pos1 = Number(event.srcElement.scrollingElement.scrollTop * 0.5);
    if(event.srcElement.scrollingElement.scrollTop>400) {
      this.fixedElementFlag=true;
    } else {
      this.fixedElementFlag=false;
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
}
