import { Injectable, HostListener } from '@angular/core';
import sdk from '@stackblitz/sdk';

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
    this.top = event.clientY - 10 + 'px';
    this.left = event.clientX - 10 + 'px';
    this.display = 'block';
    // console.log(event);
    if (event.target.nodeName === 'A') {
      this.transform = 'scale(3)';
      this.opacity = '.4';
    } else {
      this.opacity = '0';
      this.transform = 'scale(1)';
    }
  }

  hideCusromCursor(event) {
    this.display = 'none';
  }
  // @HostListener('document:mousemove', ['$event'])
  // onMousemove($event) {
  //   console.log($event);
  //   this.top = $event.clientY - 10 + 'px';
  //   this.left = $event.clientX - 10 + 'px';
  // }

  // @HostListener('document:click', ['$event'])
  // onClick($event) {
  //   console.log($event);
  // }
}
