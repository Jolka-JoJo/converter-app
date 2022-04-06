import { Component, OnInit } from '@angular/core';
import data from 'src/db.json';
import { UnitMeasurement } from 'src/app/model/unit-measurement';


@Component({
  selector: 'app-units-si',
  templateUrl: './units-si.component.html',
  styleUrls: ['./units-si.component.scss']
})
export class UnitsSIComponent implements OnInit {
  unitsSi: Array<UnitMeasurement> = [];

  displayedColumns: string[] = ['seqNo','unitName', 'unitValue', 'unitSymbol', "category"];
  dataSource = this.unitsSi;

  constructor() { }

  ngOnInit(): void {

    data.distance.units.forEach(obj => {
      if(obj.unitBelongsSI) {
        this.unitsSi.push(obj);
      }
    });

    data.capacity.units.forEach(obj => {
      if(obj.unitBelongsSI) {
        this.unitsSi.push(obj);
      }
    });

    data.weight.units.forEach(obj => {
      if(obj.unitBelongsSI) {
        this.unitsSi.push(obj);
      }
    });

    data.time.units.forEach(obj => {
      if(obj.unitBelongsSI) {
        this.unitsSi.push(obj);
      }
    });

    data.area.units.forEach(obj => {
      if(obj.unitBelongsSI) {
        this.unitsSi.push(obj);
      }
    });
  }

}
