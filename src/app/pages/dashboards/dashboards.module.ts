import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardsRoutes } from './dashboards.routing';



@NgModule({
  imports: [
    RouterModule.forChild(DashboardsRoutes),
    
  ],
})
export class DashboardsModule {}
