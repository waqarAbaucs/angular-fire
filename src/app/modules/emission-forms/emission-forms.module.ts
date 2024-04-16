import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { MainFormComponent } from './main-form/main-form.component';
import { Form1_1Component } from './main-form/form1.1/form1.1.component';
import { Form1_2Component } from './main-form/form1.2/form1.2.component';
import { Form1_3Component } from './main-form/form1.3/form1.3.component';
import { Form1_4Component } from './main-form/form1.4/form1.4.component';
import { Table1_1Component } from './main-form/table1.1/table1.1.component';
import { Table1_2Component } from './main-form/table1.2/table1.2.component';
import { Table1_3Component } from './main-form/table1.3/table1.3.component';
import { Table1_4Component } from './main-form/table1.4/table1.4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmissionFormsRoutingModule } from './emission-forms-routing.module';


@NgModule({
  declarations: [
    MainFormComponent,
    Form1_1Component,
    Form1_2Component,
    Form1_3Component,
    Form1_4Component,
    Table1_1Component,
    Table1_2Component,
    Table1_3Component,
    Table1_4Component
  ],
  imports: [
    CommonModule,
    EmissionFormsRoutingModule,
    SharedModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmissionFormsModule { }
