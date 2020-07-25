import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openPopup(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
