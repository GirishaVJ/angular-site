import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  top: any;
  left: any;
  constructor() {}

  showCustomCursor(event) {
    //setTimeout(() => {
    this.top = event.clientY - 10 + 'px';
    this.left = event.clientX - 10 + 'px';
    // }, 10);

    // console.log(event);
  }
  // @HostListener('document:mousemove', ['$event'])
  // onMousemove($event) {
  //   console.log($event);
  //   this.top = $event.clientY - 10 + 'px';
  //   this.left = $event.clientX - 10 + 'px';
  // }
}
