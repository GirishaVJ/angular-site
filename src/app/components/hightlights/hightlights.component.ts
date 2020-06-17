import { Component, OnInit } from '@angular/core';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-hightlights',
  templateUrl: './hightlights.component.html',
  styleUrls: ['./hightlights.component.scss'],
})
export class HightlightsComponent implements OnInit {
  constructor(public crsr: CursorService) {}

  ngOnInit() {
    console.log(this.crsr.pos1);
  }
}
