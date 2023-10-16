import { Component, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { TaskResponse } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-load-task',
  templateUrl: './load-task.component.html',
  styleUrls: ['./load-task.component.css']
})
export class LoadTaskComponent implements OnInit {
  taskList: Task[] = [];
  taskResponse: TaskResponse = { message: '', data: []};
  error: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getAllTasks().subscribe({
      next: (response: TaskResponse) => {
        this.taskList = response.data
        this.taskResponse = response
      },
      error: (err) => {
        this.error = 'Erro ao buscar tarefas';
      }
    });
  }
}
