import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string;

  public showAdd: boolean;

  public sub: Subscription;

  constructor(private uiService: UiService) {
    this.title = 'Task-Tracker';
    this.showAdd = false;
    this.sub = this.uiService.onToggle().subscribe((value) => {
      this.showAdd = value;
    })
  }

  ngOnInit(): void {
  }

  public toggleAllTask(): void {
    this.uiService.toggleAddTask();
  }

}
