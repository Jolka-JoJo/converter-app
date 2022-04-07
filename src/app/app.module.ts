import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { UnitsSIComponent } from './pages/units-si/units-si.component';
import { MatTableModule } from '@angular/material/table';
import { MeniuComponent } from './components/meniu/meniu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UnitsSIComponent,
    MeniuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
