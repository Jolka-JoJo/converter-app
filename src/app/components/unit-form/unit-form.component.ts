import { Component, Input, OnInit} from '@angular/core';
import { UnitMeasurement } from 'src/app/model/unit-measurement';
import { UnitsServiceService } from 'src/app/services/units-service.service';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit{
  @Input() nameCategory: String = "";
  measurement?: UnitMeasurement[];
  unitFrom!: UnitMeasurement[];
  unitTo!: UnitMeasurement[];

  unitsFromId!: number;
  unitsToId!: number;
  unitValueFrom!: number;
  unitValueTo!: number;
  valueFrom!: number;
  valueTo!: number;

  constructor(private unitServise: UnitsServiceService) { }

  ngOnInit(): void {
    this.unitServise.getCategoryUnits(this.nameCategory).subscribe((units) =>{
      this.measurement = units;
    console.log()}
      );
  }


  onKeyFrom(event: any) {
    let from= true;
    this.valueFrom = event.target.value;
    this.changeValues(from);
  }

  onKeyTo(event: any) {
    let from= false;
    this.valueTo = event.target.value;
    this.changeValues(from);
  }

  changeUnits(event: any){
    let unitFromExist:boolean;
    this.unitsFromId ? unitFromExist = true : unitFromExist = false;

    let unitToExist:boolean;
    this.unitsToId ? unitToExist = true : unitToExist = false;

    if(unitFromExist){
       this.unitServise.getUnitById(this.unitsFromId).subscribe((unit) =>{
        this.unitFrom= unit;
        if(unitFromExist && unitToExist && (this.valueTo || this.valueFrom)) this.changeValues(true);
      });
    }

    if(unitToExist){
      this.unitServise.getUnitById(this.unitsToId).subscribe((unit) =>{
        this.unitTo = unit;
        if(unitFromExist && unitToExist && (this.valueTo || this.valueFrom)) this.changeValues(true);
      });
    }
  }

  changeValues(from: boolean){
    this.unitFrom.forEach(element=>{
      this.unitValueFrom = element.unitValue;
    })
    this.unitTo.forEach(element=>{
      this.unitValueTo = element.unitValue;
    })

    from ? this.valueTo =  Math.floor(((this.valueFrom * this.unitValueFrom) / this.unitValueTo)*10000000000)/10000000000 :
    this.valueFrom = Math.floor(((this.valueTo * this.unitValueTo) / this.unitValueFrom)*10000000000)/10000000000;
  }

}
