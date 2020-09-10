import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-clients-prefer-us',
  templateUrl: './why-clients-prefer-us.component.html',
  styleUrls: ['./why-clients-prefer-us.component.scss'],
})
export class WhyClientsPreferUsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirect(page) {
    this.router.navigate(['clients-prefer-us', page]);
  }
}
