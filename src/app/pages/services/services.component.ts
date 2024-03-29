import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/services/cursor.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(public crsr: CursorService) {}

  ngOnInit(): void {}
}
