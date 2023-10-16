import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskResponse } from './task.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl = 'http://localhost:3000/task';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(this.apiUrl)
  }
}
