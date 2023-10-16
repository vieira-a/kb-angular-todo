import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { LoadTaskComponent } from './components/task/load-task/load-task.component';

const routes: Routes = [
  {
    path: '',
    component: LoadTaskComponent
  },
  {
    path: 'create',
    component: AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
