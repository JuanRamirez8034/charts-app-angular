import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarComponent } from './pages/bar/bar.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    BarComponent,
    DoubleBarsComponent,
    DoughnutComponent,
    DoughnutHttpComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    ChartsRoutingModule,
    ComponentsModule
  ]
})
export class ChartsModule { }
