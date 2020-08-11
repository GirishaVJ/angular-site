import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirect(page) {
    this.router.navigate(["achievements",page]);
  }
}

