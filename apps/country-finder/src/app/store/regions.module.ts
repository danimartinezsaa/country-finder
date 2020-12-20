import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as regionsReducer from './regions.reducer';
import { RegionsEffects } from './regions.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(regionsReducer.regionsFeatureKey, regionsReducer.reducer),
    EffectsModule.forFeature([RegionsEffects])
  ]
})
export class RegionsModule { }