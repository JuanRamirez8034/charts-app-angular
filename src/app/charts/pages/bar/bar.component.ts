import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements AfterViewInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  // opciones de personalizacion de la grafica
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  // tipo de grafica
  public barChartType: ChartType = 'bar';
  
  // datos de la grafica
  public barChartData: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025', '2026', '2027' ],//etiquetas de la grafica en genral
    datasets: [
      { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: 'Series A', },//grupo de datos y configuracion
      { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: 'Series A', },
      { data: [ 0, 0, 0, 0, 0, 0, 0 ], label: 'Series C', }
    ]
  };
  
  // actualizando los valores despues de que la vista del componente esté lista
  ngAfterViewInit(): void {
    console.log('Actualizando valores');
    this.randomize();
    
  }

  // actualizar los valores de la tabla
  public randomize(): void {

    // actualizando los valores de la data de los datasets
    this.barChartData.datasets = this.barChartData.datasets.map(dataSet => ( {data: dataSet.data.map(data => Math.round(Math.random() * 100)), label:dataSet.label} ) );

    this.chart?.update();
  }
}
