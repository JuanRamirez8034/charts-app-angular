import { Component } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public MenuConfig !: Menu;
  private _basePath :string = '/charts-app';


  constructor(){

    this.MenuConfig = {
      brand:{
        name : 'Charts App',
        img  : './assets/chart-brand.png'
      },
      items:[
        {
          label:'bar',
          path:`${this._basePath}/bar-chart`,
          bootsTrapIco:'bi bi-file-earmark-bar-graph'
        },
        {
          label:'doughnut',
          path:`${this._basePath}/doughnut`,
          bootsTrapIco:'bi bi-pie-chart'
        },
        {
          label:'double bar chart',
          path:`${this._basePath}/double-bar-chart`,
          bootsTrapIco:'bi bi-clipboard2-data'
        },
        {
          label:'doughnut http',
          path:`${this._basePath}/doughnut-http`,
          bootsTrapIco:'bi bi-pie-chart-fill'
        },
      ]
    };
    
  }
}
