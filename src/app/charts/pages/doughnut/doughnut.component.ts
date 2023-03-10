import { Component } from '@angular/core';
import { ChartData, ChartType, Color, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }
      ]
    };
    public chartOptions : ChartConfiguration['options'] = {
      responsive:true
    }
    public doughnutChartType: ChartType = 'doughnut';

    public colors : Color[]=[]
}
