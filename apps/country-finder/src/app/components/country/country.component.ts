import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Country } from '@pfc/wbconsumer';
import { Observable } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { NavigationService, Pages } from '../../services/navigation.service';

@Component({
  styleUrls: ['./country.component.scss'],
  templateUrl: './country.component.html',
  selector: 'c-finder-country',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent {

  country$: Observable<Country>;
  private continentId;

  constructor(
    private countriesService: CountriesService,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((event) => {
      this.country$ = this.countriesService.getCountry$(event.id);
    });

    this.country$.subscribe((country) => {
      if (country) {
        this.continentId = country.continent.id;
      }
    });
  }

  goBack(): void {
    this.navigationService.navigateTo(Pages.REGION, this.continentId);
  }
}
