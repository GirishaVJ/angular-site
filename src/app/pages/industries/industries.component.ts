import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/services/cursor.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  constructor(public crsr: CursorService) {}

  ngOnInit(): void {
  }

}
