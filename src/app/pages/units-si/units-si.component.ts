import { Component, OnInit } from '@angular/core';
import { UnitMeasurement } from 'src/app/model/unit-measurement';
import { UnitsServiceService } from 'src/app/services/units-service.service';


@Component({
  selector: 'app-units-si',
  templateUrl: './units-si.component.html',
  styleUrls: ['./units-si.component.scss']
})
export class UnitsSIComponent implements OnInit {

  unitsSi!: UnitMeasurement[];

  displayedColumns: string[] = ['seqNo','unitName', 'unitValue', 'unitSymbol', "category"];
  dataSource = this.unitsSi;

  constructor(private unitService: UnitsServiceService) { }

  ngOnInit(): void {

    this.unitService.getSIUnits().subscribe((unitsSI) =>{
      this.unitsSi=unitsSI;
  });

}
}
