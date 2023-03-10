import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType, LabelItem } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;//referencia a la grafica del html

  @Input('dataSets') public dataSets !: ChartDataset[];//datas para la grafica
  @Input('chartLabels')  public chartLabels  : string[]    = [];//etiquetas de la grafica
  @Input('horizontalBar') public horizontalBar : boolean = false;//alternar entre barra horizontal y vertical
  @Input('charTitle') public charTitle !: string;
  public data : ChartData = {labels:[], datasets:[]};//variable para la data del grafico

  public legend : boolean = true;
  
  public barChartType: ChartType = 'bar';// tipo de grafica
  
  // opciones de personalizacion de la grafica
  public barChartOptions !: ChartConfiguration['options'];
  
  ngOnInit(): void {
    // alternando entre linear y bar
    if(this.horizontalBar){
      this.barChartType = 'line';
    }

    // agregando la configuración a la grafica
    this.barChartOptions = {
      responsive: true,
      plugins:{
        legend:{position:'bottom'},
        title:{text:this.charTitle, display: !(!this.charTitle)}
      },
    };

    // cargando la data en el grafico
    this.data = {
      labels:this.chartLabels,
      datasets:this.dataSets
    }
    
  }
  
}
