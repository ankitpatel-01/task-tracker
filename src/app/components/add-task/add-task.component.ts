import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Task } from 'src/app/models/Task.model';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public taskForm: FormGroup;
  public showAdd: boolean;
  public sub: Subscription;

  @Output() onFormSubmit: EventEmitter<Task>

  constructor(private fb: FormBuilder, private uiService: UiService) {
    this.taskForm = this.buildForm();
    this.showAdd = false;
    this.onFormSubmit = new EventEmitter();
    this.sub = this.uiService.onToggle().subscribe((value) => {
      this.showAdd = value;
    })
  }

  ngOnInit(): void {
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      text: ["", Validators.required],
      day: ["", Validators.required],
      reminder: [false]
    });
  }

  get form() {
    return this.taskForm.controls;
  }

  public onSubmit(): void {
    const newTask: Task = {
      text: this.taskForm.controls['text'].value as string,
      day: this.taskForm.controls['day'].value,
      reminder: this.taskForm.controls['reminder'].value,
    }
    this.onFormSubmit.emit(newTask)
    this.taskForm.reset();
  }

}
