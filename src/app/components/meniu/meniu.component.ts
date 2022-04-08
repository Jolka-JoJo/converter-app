import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.scss']
})
export class MeniuComponent implements OnInit {
  logoSrc = "src/assets/logo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
