import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styleUrls: ['./double-bars.component.css']
})
export class DoubleBarsComponent {

  public chartLabels : string[] = [ '2021', '2022', '2023', '2024', '2025', '2026', '2027' ];//etiquetas de la grafica en genral

  public data1 : ChartDataset[] = [
      { data: [ 15, 30, 20, 60, 75, 40, 70 ], label: 'Series A', },//grupo de datos y configuracion
      { data: [ 10, 30, 20, 60, 20, 40, 70 ], label: 'Series A', },
      { data: [ 10, 30, 20, 60, 90, 40, 0 ], label: 'Series C', }
  ];
}
