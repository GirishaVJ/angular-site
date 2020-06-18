import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { CursorService } from 'src/app/services/cursor.service';

@Component({  
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('footer') elementView: ElementRef;
  constructor(public crsc:CursorService) { }
  ngAfterViewInit() {
    this.crsc.footerHight = this.elementView.nativeElement.offsetHeight;
}
  ngOnInit() {
  }

}
