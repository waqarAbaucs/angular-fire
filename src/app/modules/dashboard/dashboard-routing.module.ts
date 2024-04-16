import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Pages/main/main.component';
import { ShowRecordsComponent } from './Pages/records/show-records/show-records.component';
import { AddRecordsComponent } from './Pages/records/add-records/add-records.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'records',
    component: ShowRecordsComponent
  },
  {
    path: 'add-records',
    component: AddRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
