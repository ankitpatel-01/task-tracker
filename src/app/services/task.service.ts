import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASKS } from '../db/mock-task';
import { Task } from '../models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiLink: string;

  constructor(private http: HttpClient) {
    this.apiLink = "http://localhost:3000/tasks"
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiLink)
  }

  public createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiLink, task)
  }

  public editTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiLink}/${id}`, task)
  }

  public deleteTask(task: Task): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/${task.id}`)
  }

  public reminderToggle(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiLink}/${task.id}`, task)
  }
}
