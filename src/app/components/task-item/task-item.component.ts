import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() public task: Task;
  @Output() public onDeleteTask: EventEmitter<Task>
  @Output() public onReminderToggle: EventEmitter<Task>

  constructor() {
    this.task = {} as Task;
    this.onDeleteTask = new EventEmitter();
    this.onReminderToggle = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  public onToggle(task: Task) {
    this.onReminderToggle.emit(task);
  }

}
