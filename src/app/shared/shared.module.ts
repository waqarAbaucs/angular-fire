import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PrimengModule } from '../modules/primeng/primeng.module';

const SHARED_COMPONENTS = [
  TableComponent
]

@NgModule({
  declarations: SHARED_COMPONENTS,
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: SHARED_COMPONENTS
})
export class SharedModule { }
