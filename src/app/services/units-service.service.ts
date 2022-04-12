import { UnitCategory } from './../model/unit-category';
import { UnitMeasurement } from './../model/unit-measurement';
import { Injectable } from '@angular/core';
import data from 'db.json';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsServiceService {
  private apiUrl ='http://localhost:3000/measurements';
  constructor(private http:HttpClient) { }

  getUnits() : Observable<UnitMeasurement[]>{
    return this.http.get<UnitMeasurement[]>(this.apiUrl);
  }

  getCategoryUnits(unitCategoryName: String): Observable<UnitMeasurement[]>{
    return this.http.get<UnitMeasurement[]>(this.apiUrl + "?unitCategory=" + unitCategoryName);
  }

  getSIUnits(): Observable<UnitMeasurement[]>{
    return this.http.get<UnitMeasurement[]>(this.apiUrl + "?unitBelongsSI=true");
  }

  getUnitById(id:number): Observable<UnitMeasurement[]>{
    return this.http.get<UnitMeasurement[]>(this.apiUrl + "?unitId=" + id);
  }

}
