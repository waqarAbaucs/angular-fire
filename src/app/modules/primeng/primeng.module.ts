import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';

const PRIME_NG_MODULES: any[] = [
  BreadcrumbModule,
  InputTextModule,
  DropdownModule,
  StepsModule,
  TableModule,
  SliderModule,
  MultiSelectModule,
  ContextMenuModule,
  ButtonModule,
  ProgressBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PRIME_NG_MODULES,
  ],
  exports: PRIME_NG_MODULES
})
export class PrimengModule { }
