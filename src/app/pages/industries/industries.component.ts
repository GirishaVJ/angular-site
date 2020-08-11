import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/services/cursor.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
  pageTitle;
  constructor(public crsr: CursorService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((result:any)=>{
      this.pageTitle = result.params.id.replace("-",' ');
    });
  }

}
