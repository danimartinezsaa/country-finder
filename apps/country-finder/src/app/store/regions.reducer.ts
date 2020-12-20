import { Action, createReducer, on } from "@ngrx/store";
import { Continent, Country } from "@pfc/wbconsumer";
import * as RegionActions from './regions.actions';

export interface State {
    continents: Continent[],
    countries: Country[],
    country: Country,
}

export const initialState: State = {
    continents: [],
    countries: [],
    country: null,
}

export const regionsFeatureKey = 'regions';

const regionsReducer = createReducer(
    initialState,
    on(RegionActions.loadContinents, (state) => state),
    on(RegionActions.loadContinentsSuccess, (state, {continents}) => {
        return {
            ...state,
            continents: [...continents],
        }
    }),
    on(RegionActions.loadContinentsError, (state) => state),
    on(RegionActions.loadCountries, (state) => state),
    on(RegionActions.loadCountriesSuccess, (state, {countries}) => {
        return {
            ...state,
            countries: [...countries],
        }
    }),
    on(RegionActions.loadCountriesError, (state) => state),
    on(RegionActions.loadCountry, (state) => state),
    on(RegionActions.loadCountrySuccess, (state, {country}) => {
        return {
            ...state,
            country: {...country},
        }
    }),
    on(RegionActions.loadCountryError, (state) => state),

);

export function reducer(state: State | undefined, action: Action) {
    return regionsReducer(state, action);
}