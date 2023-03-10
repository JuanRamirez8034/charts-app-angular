import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    BarChartComponent
  ],
  exports:[
    BarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
