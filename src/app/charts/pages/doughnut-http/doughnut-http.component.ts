import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styleUrls: ['./doughnut-http.component.css']
})
export class DoughnutHttpComponent implements OnInit{

  public data !: {rs:string[],rsNumbr:string[]};

  public doughnutChartData !: ChartData<'doughnut'> ;

  public chartOptions : ChartConfiguration['options'] = {
    responsive:true
  }

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private chartService:ChartsService){}


  ngOnInit(): void {

    this.chartService.getNumberRsUsers()
    .subscribe(data=>{
    
    this.data = {
      rs: Object.keys(data),
      rsNumbr: Object.values(data)
    };

    console.log('Cargando data Servidor', this.data);
    
    console.log('Cargando la grafica');
    
    this.doughnutChartData = {
      labels: this.data?.rs,
      datasets: [
        {data: this.data.rsNumbr.map(e => parseInt(e))}
      ]
    }

   },
   error=>{
    console.log('Hubo un error al traer la data',error);
    
   });
    
  }




}
