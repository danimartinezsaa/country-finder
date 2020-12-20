import { Injectable } from '@angular/core';
import { Continent } from '@pfc/wbconsumer';
import { Observable } from 'rxjs';
import { NavigationService, Pages } from './navigation.service';
import { map } from 'rxjs/operators';
import { RegionsFacadeService } from '../store/regionsFacade.service';

@Injectable({
  providedIn: 'root',
})
export class ContinentsService {

  constructor(
    private regionsFacadeService: RegionsFacadeService,
    private navigationService: NavigationService,
  ) {
    this.regionsFacadeService.loadContinents();
  }

  getContinents$(): Observable<Continent[]> {
    return this.regionsFacadeService.getContinents$();
  }

  getRegion$(code: string): Observable<Continent> {
    return this.regionsFacadeService.getContinents$().pipe(
      map((regions) => regions.find((region) => region.code === code)),
    );
  }
  
  selectRegion(continent: Continent): void {
    this.navigationService.navigateTo(Pages.REGION, continent.code);
  }
}
