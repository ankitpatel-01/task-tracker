import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public title: string;
  @Input() public color: string;
  @Output() public btnClick: EventEmitter<Event>;

  constructor() {
    this.title = "";
    this.color = "";
    this.btnClick = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.btnClick.emit();
  }

}
