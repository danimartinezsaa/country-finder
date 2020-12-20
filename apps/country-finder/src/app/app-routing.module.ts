import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountryComponent } from './components/country/country.component';
import { RegionComponent } from './components/region/region.component';

const routes: Routes = [
  {path: '', component: ContinentsComponent},
  {path: 'region/:code', component: RegionComponent},
  {path: 'country/:id', component: CountryComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
