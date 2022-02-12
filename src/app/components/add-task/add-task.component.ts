import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/Task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public taskForm: FormGroup;

  @Output() onFormSubmit: EventEmitter<Task>

  constructor(private fb: FormBuilder) {
    this.taskForm = this.buildForm();
    this.onFormSubmit = new EventEmitter();
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
  }

}
