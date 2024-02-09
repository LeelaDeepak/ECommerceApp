import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { item } from './modal';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http:HttpClient){}

  getAllprod():Observable<item[]>{
    return this.http.get<item[]>('http://localhost:3000/All-Items');
  }

  getbikeProd():Observable<item[]>{
    return this.http.get<item[]>('http://localhost:3000/Bike-Items');
  }

  getCarProd():Observable<item[]>{
    return this.http.get<item[]>('http://localhost:3000/Car-Items');
  }


}
