import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Task-Tracker';
  }

  ngOnInit(): void {
  }

  public toggleAllTask(): void {
    console.log("toggle btn click");

  }

}
