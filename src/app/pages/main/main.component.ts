import { UnitCategory } from './../../model/unit-category';
import { Component, OnInit } from '@angular/core';
import { UnitMeasurement } from 'src/app/model/unit-measurement';
import { UnitsServiceService } from 'src/app/services/units-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  measurement?: UnitMeasurement[];
  categories!: UnitCategory[];
  category?: UnitMeasurement[];


  constructor(private unitServise: UnitsServiceService) { }

  ngOnInit(): void {
    this.unitServise.getUnits().subscribe((units) =>{
      this.measurement = units;}
      );

  }

}
