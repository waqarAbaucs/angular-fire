import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './Pages/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { ShowRecordsComponent } from './Pages/records/show-records/show-records.component';
import { AddRecordsComponent } from './Pages/records/add-records/add-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    ShowRecordsComponent,
    AddRecordsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class DashboardModule {}
