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
  displayedColumns: string[] = ['seqNo','prefixName', 'prefixSymbol', 'prefixValue'];
  dataSource = this.unitsPref;
  constructor(private prefixService:PrefixesServiceService ) { }

  ngOnInit(): void {
    this.prefixService.getPrefixes().subscribe((unitsPR) => {
      this.unitsPref = unitsPR;
    });
  }

}
