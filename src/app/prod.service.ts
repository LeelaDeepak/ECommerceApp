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

  searchAllProd(query:String){
    return this.http.get(`http://localhost:3000/All-Items?name=${query}`);
  }

  fourRatedProd(){
    return this.http.get('http://localhost:3000/All-Items?rating=4');
  }

  threeRatedProd(){
    return this.http.get('http://localhost:3000/All-Items?rating=3');
  }

  twoRatedProd(){
    return this.http.get('http://localhost:3000/All-Items?rating=2');
  }

  getwithlitmit(min:number,max:number){
    return this.http.get(`http://localhost:3000/All-Items?price_gte=${min}&price_lte=${max}`);
  }

  getAbove(limit:number) {
    return this.http.get(`http://localhost:3000/All-Items?price_gte=${limit}`);
  }

}
