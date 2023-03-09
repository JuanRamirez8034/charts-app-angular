import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarComponent } from './pages/bar/bar.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';


@NgModule({
  declarations: [
    BarComponent,
    DoubleBarsComponent,
    DoughnutComponent,
    DoughnutHttpComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
