import { createFeatureSelector, createSelector } from "@ngrx/store";
import { regionsFeatureKey, State } from "./regions.reducer";

export const getRegionsState = createFeatureSelector<State>(
    regionsFeatureKey,
);

export const getContinents = createSelector(
    getRegionsState,
    (state: State) => state.continents,
)

export const getCountries = createSelector(
    getRegionsState,
    (state: State) => state.countries,
)

export const getCountry = createSelector(
    getRegionsState,
    (state: State) => state.country,
)