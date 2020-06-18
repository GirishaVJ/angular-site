import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/services/cursor.service';

@Component({
  selector: 'app-banner-animation',
  templateUrl: './banner-animation.component.html',
  styleUrls: ['./banner-animation.component.scss']
})
export class BannerAnimationComponent implements OnInit {

  constructor(public crsc:CursorService) { }

  ngOnInit(): void {
  }

}
