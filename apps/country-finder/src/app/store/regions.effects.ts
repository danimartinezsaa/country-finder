import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import * as  RegionsActions from './regions.actions';
import { getContinents$, getCountries$, getCountry$ } from '@pfc/wbconsumer';

@Injectable()
export class RegionsEffects {

    loadContinents$ = createEffect(() => this.actions$.pipe(
        ofType(RegionsActions.loadContinents),
        concatMap(() =>
            getContinents$().pipe(
                map((continents) => RegionsActions.loadContinentsSuccess({continents})),
                catchError((error) => of(RegionsActions.loadContinentsError({error})))
            ),
        ),
    ));

    loadCountries$ = createEffect(() => this.actions$.pipe(
        ofType(RegionsActions.loadCountries),
        concatMap(({code}) =>
            getCountries$(code).pipe(
                map((countries) => RegionsActions.loadCountriesSuccess({countries})),
                catchError((error) => of(RegionsActions.loadCountriesError({error}))),
            ),
        ),
    ));

    loadCountry$ = createEffect(() => this.actions$.pipe(
        ofType(RegionsActions.loadCountry),
        concatMap(({id}) =>
            getCountry$(id).pipe(
                map((country) => RegionsActions.loadCountrySuccess({country})),
                catchError((error) => of(RegionsActions.loadCountryError({error}))),
            ),
        ),
    ));

    constructor(private actions$: Actions) {}
}