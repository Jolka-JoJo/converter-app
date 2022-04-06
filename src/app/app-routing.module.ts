import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './pages/main/main.component';
import { UnitsSIComponent } from './pages/units-si/units-si.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'units-SI', component: UnitsSIComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
