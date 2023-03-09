import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'bar-chart',
        component:BarChartComponent
      },
      {
        path:'double-bar-chart',
        component:DoubleBarsComponent
      },
      {
        path:'doughnut',
        component:DoughnutComponent
      },
      {
        path:'doughnut-http',
        component:DoughnutHttpComponent
      },
      {
        path:'**',
        redirectTo:'bar-chart'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
