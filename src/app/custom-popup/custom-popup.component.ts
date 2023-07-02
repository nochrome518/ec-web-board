import { Component, OnInit,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.css']
})
export class CustomPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
