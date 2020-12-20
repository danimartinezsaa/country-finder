import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@pfc/wbconsumer';

@Component({
    styleUrls: ['./country-info.component.scss'],
    templateUrl: './country-info.component.html',
    selector: 'c-finder-country-info',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfoComponent {
    @Input() country: Country;
    constructor() {}
}