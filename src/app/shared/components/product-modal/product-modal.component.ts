import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  closeButton() {
    this.closeEvent.emit();
  }
}
