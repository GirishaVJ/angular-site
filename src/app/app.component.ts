import { Component, OnInit } from '@angular/core';
import { CursorService } from './services/cursor.service';
import { fadeAnimation } from './route.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(public crsr: CursorService) {}
  ngOnInit() {}
}
