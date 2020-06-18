import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { CursorService } from 'src/app/services/cursor.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('footer') elementView: ElementRef;
  constructor(public crsc: CursorService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.crsc.footerHight = this.elementView.nativeElement.offsetHeight;
    });
  }
}
