import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit(): void {
    this.getAllTask();
  }

  public getAllTask(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => { this.tasks = tasks },
      error: (e) => { console.log(e) }
    });
  }

  public addTask(task: Task): void {
    this.taskService.createTask(task).subscribe({
      next: () => {
        this.tasks.push(task);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  public deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe({
      next: () => {
        this.getAllTask();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  public toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.reminderToggle(task).subscribe({
      error: (e) => { console.log(e) }
    })
  }
}
