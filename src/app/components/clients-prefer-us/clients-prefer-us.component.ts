import { Component, OnInit } from '@angular/core';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-clients-prefer-us',
  templateUrl: './clients-prefer-us.component.html',
  styleUrls: ['./clients-prefer-us.component.scss'],
})
export class ClientsPreferUsComponent implements OnInit {
  constructor(public crsr: CursorService) {}

  ngOnInit() {}
}
