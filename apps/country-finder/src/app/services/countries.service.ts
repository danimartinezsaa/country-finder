import { Injectable } from '@angular/core';
import { Country } from '@pfc/wbconsumer';
import { Observable } from 'rxjs';
import { NavigationService, Pages } from './navigation.service';
import { RegionsFacadeService } from '../store/regionsFacade.service';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  constructor(
    private regionsFacadeService: RegionsFacadeService,
    private navigationService: NavigationService,
  ) {}

  getCountries$(code: string): Observable<Country[]> {
    return this.regionsFacadeService.getCountries$(code);
  }

  getCountry$(id: string): Observable<Country> {
    return this.regionsFacadeService.getCountry$(id);
  }

  selectCountry(id: string): void {
    this.navigationService.navigateTo(Pages.COUNTRY, id);
  }
}
