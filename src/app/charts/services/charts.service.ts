import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http : HttpClient) { }

  public getNumberRsUsers(){
    return this.http.get<any>('http://localhost:3000/grafica').pipe(
      delay(2000),
      map(resp => (resp))
    );
  }
}
