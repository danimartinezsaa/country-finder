import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Continent } from '@pfc/wbconsumer';

@Component({
    styleUrls: ['./region-info.component.scss'],
    templateUrl: './region-info.component.html',
    selector: 'c-finder-region-info',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionInfoComponent {
    @Input() region: Continent;
    constructor() {}
}