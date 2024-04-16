import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    LayoutModule,
  ],
  // providers:[DashboardService,]
})
export class ModulesModule { }
