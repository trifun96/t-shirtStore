import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.css']
})
export class SharedModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  
  closeButton() {
    this.closeEvent.emit();
  }
}
