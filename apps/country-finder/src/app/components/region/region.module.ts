import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegionInfoComponent } from './region-info.component';
import { RegionComponent } from './region.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        RegionComponent,
        RegionInfoComponent,
    ],
    exports: [
        RegionComponent,
        RegionInfoComponent,
    ]
})
export class RegionModule {}