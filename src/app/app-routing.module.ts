import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'charts-app',
    loadChildren: ()=>import('./charts/charts.module').then(m=>m.ChartsModule)
  },
  {
    path:'**',
    redirectTo:'charts-app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
