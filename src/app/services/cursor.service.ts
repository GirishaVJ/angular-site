import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  top: any;
  left: any;
  display: string;

  isHyperlink = false;
  constructor() {}

  showCustomCursor(event) {
    this.top = event.clientY - 5 + 'px';
    this.left = event.clientX - 5 + 'px';
    this.display = 'block';
    // console.log(event);
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
