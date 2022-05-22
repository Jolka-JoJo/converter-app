import { Component, OnInit } from '@angular/core';
import { UnitPrefix } from 'src/app/model/unit-prefix';
import { PrefixesServiceService } from 'src/app/services/prefixes-service.service';

@Component({
  selector: 'app-prefixes',
  templateUrl: './prefixes.component.html',
  styleUrls: ['./prefixes.component.scss']
})
export class PrefixesComponent implements OnInit {

  unitsPref!: UnitPrefix[];
  prefixValue!: String[];
  displayedColumns: string[] = ['seqNo','prefixName', 'prefixSymbol', 'prefixValue'];
  constructor(private prefixService:PrefixesServiceService ) {}

  ngOnInit(){
    this.getPrefixes();
  }

  getPrefixes(){
    this.prefixService.getPrefixes().subscribe((unitsPR: any[]) => {
      this.unitsPref = unitsPR;
      this.unitsPref.forEach(element => {
        var prefParts = element.prefixValue.split("e");
        element.prefixValue = prefParts[1];
      });
    });
  }

}
