import { Component, HostListener, OnInit } from '@angular/core';
import { CursorService } from './services/cursor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular';
  top: any;
  left: any;
  display: string;
  transform = 'scale(1)';
  opacity = '.5';
  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    // console.log($event);
    // if ($event.toElement.className === 'ganit-achievements-content') {
    //   this.top = $event.clientY - 10 + 'px';
    //   this.left = $event.clientX - 10 + 'px';
    //   this.crsr.opacity = '.4';
    // } else {
    //   this.crsr.opacity = '0';
    // }
    // if ($event.target.nodeName === 'A') {
    //   this.crsr.transform = 'scale(2)';
    //   this.crsr.opacity = '.4';
    // } else {
    //   this.crsr.opacity = '0';
    //   this.crsr.transform = 'scale(1)';
    // }
  }

  constructor(public crsr: CursorService) {}
  ngOnInit() {}
}
