import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { UnitsSIComponent } from './pages/units-si/units-si.component';
import { MatTableModule } from '@angular/material/table';
import { MeniuComponent } from './components/meniu/meniu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UnitFormComponent } from './components/unit-form/unit-form.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { PrefixComponent } from './components/prefix/prefix.component';
import { PrefixesComponent } from './pages/prefixes/prefixes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UnitsSIComponent,
    MeniuComponent,
    UnitFormComponent,
    PrefixComponent,
    PrefixesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
