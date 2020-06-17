import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  top: any;
  left: any;
  display: string;
  transform = 'scale(1)';
  opacity = '.5';
  constructor() {}

  showCustomCursor(event) {
    this.top = event.clientY - 5 + 'px';
    this.left = event.clientX - 5 + 'px';
    this.display = 'block';
    // console.log(event);
    if (event.target.tagName.toLowerCase() === 'a' || event.target.tagName.toLowerCase() === 'span') {
      this.transform = 'scale(5)';
      this.opacity = '.4';
    } else {
      this.opacity = '0';
      this.transform = 'scale(0.5)';
      this.hideCusromCursor(this);
    }
  }

  hideCusromCursor(event) {
    this.display = 'none';
  }
}
