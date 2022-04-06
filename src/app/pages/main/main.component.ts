import { Component, OnInit } from '@angular/core';
import { UnitMeasurement } from 'src/app/model/unit-measurement';
import data from 'src/db.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  measurement?: UnitMeasurement[];

  constructor() { }

  ngOnInit(): void {
    this.measurement = data.distance.units;
  }

}
