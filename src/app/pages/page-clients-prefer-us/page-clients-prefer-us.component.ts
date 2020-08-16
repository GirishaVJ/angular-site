import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-clients-prefer-us',
  templateUrl: './page-clients-prefer-us.component.html',
  styleUrls: ['./page-clients-prefer-us.component.scss']
})
export class PageClientsPreferUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirect(page) {
    this.router.navigate(["clients-prefer-us",page]);
  }
}

