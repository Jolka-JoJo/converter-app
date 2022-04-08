import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UnitMeasurement } from 'src/app/model/unit-measurement';
import { UnitsServiceService } from 'src/app/services/units-service.service';


@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit, OnChanges {
  @Input() nameCategory: String = "";
  measurement?: UnitMeasurement[];
  text ="";

  constructor(private unitServise: UnitsServiceService) { }

  ngOnInit(): void {
    this.unitServise.getCategoryUnits(this.nameCategory).subscribe((units) =>{
      this.measurement = units;}
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes detected");
  }

}
