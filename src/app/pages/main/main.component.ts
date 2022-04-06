import { Component, OnInit } from '@angular/core';
import { UnitMeasurement } from 'src/app/model/unit-measurement';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  measurement?: UnitMeasurement[];
  // one?: UnitMeasurement;

  constructor() { }

  ngOnInit(): void {
    this.measurement =[
      {unitId: 0, unitName: 'milimetras', unitBelongsSI: false, unitValue: 0.001},
      {unitId: 1, unitName: 'centimetras', unitBelongsSI: false, unitValue: 0.01},
      {unitId: 2, unitName: 'decimetras', unitBelongsSI: false, unitValue: 0.1},
      {unitId: 3, unitName: 'metras', unitBelongsSI: true, unitValue: 1},
    ]
  }

}
