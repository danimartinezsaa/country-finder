import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Continent, Country } from '@pfc/wbconsumer';
import { Observable } from 'rxjs';
import { ContinentsService } from '../../services/continents.service';
import { CountriesService } from '../../services/countries.service'
import { NavigationService } from '../../services/navigation.service';

@Component({
  styleUrls: ['./region.component.scss'],
  templateUrl: './region.component.html',
  selector: 'c-finder-region',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionComponent {
  region$: Observable<Continent>;
  countries$: Observable<Country[]>;

  constructor(
    private route: ActivatedRoute,
    private continentsService: ContinentsService,
    private countriesService: CountriesService,
    private navigationService: NavigationService,
  ) {
    this.route.params.subscribe((event) => {
      this.region$ = this.continentsService.getRegion$(event.code);
      this.countries$ = this.countriesService.getCountries$(event.code);
    });
  }

  selectCountry(country: Country): void {
    this.countriesService.selectCountry(country.id);
  }

  goBack(): void {
    this.navigationService.goHome();
  }
}
