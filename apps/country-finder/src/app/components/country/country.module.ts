import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CountryComponent } from './country.component';
import { CountryInfoComponent } from './country-info.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        CountryComponent,
        CountryInfoComponent,
    ],
    exports: [
        CountryComponent,
        CountryInfoComponent,
    ]
})
export class CountryModule {}