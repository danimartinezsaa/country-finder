import { createAction, props } from '@ngrx/store';
import { Continent, Country } from '@pfc/wbconsumer';

export const loadContinents = createAction(
    '[Regions] Load continents',
);

export const loadContinentsSuccess = createAction(
    '[Continents] Load continents success',
    props<{ continents: Continent[] }>(),
);

export const loadContinentsError = createAction(
    '[Continents] Load continents error',
    props<{ error: any }>(),
);

export const loadCountries = createAction(
    '[Countries] Load countries',
    props<{ code: string }>(),
);

export const loadCountriesSuccess = createAction(
    '[Countries] Load countries success',
    props<{ countries: Country[] }>(),
);

export const loadCountriesError = createAction(
    '[Countries] Load countries error',
    props<{ error: any }>(),
);

export const loadCountry = createAction(
    '[Country] Set country',
    props<{ id: string }>(),
);

export const loadCountrySuccess = createAction(
    '[Country] Load country success',
    props<{ country: Country }>(),
);

export const loadCountryError = createAction(
    '[Country] Load country error',
    props<{ error: any }>(),
);