import { Component, OnInit } from '@angular/core';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  constructor(public crsr: CursorService) {}

  ngOnInit() {}
}
