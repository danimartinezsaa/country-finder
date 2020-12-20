import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Continent, Country } from "@pfc/wbconsumer";
import { Observable } from "rxjs";
import * as RegionActions from '../store/regions.actions';
import * as RegionSelectors from '../store/regions.selectors';

@Injectable({
    providedIn: 'root'
})
export class RegionsFacadeService {

    constructor(private store: Store) {}

    loadContinents(): void {
        this.store.dispatch(RegionActions.loadContinents());
    }

    getContinents$(): Observable<Continent[]> {
        return this.store.select(RegionSelectors.getContinents);
    }

    getCountries$(regionCode: string): Observable<Country[]> {
        this.store.dispatch(RegionActions.loadCountries({code: regionCode}));
        return this.store.select(RegionSelectors.getCountries);
    }

    getCountry$(id: string): Observable<Country> {
        this.store.dispatch(RegionActions.loadCountry({id}));
        return this.store.select(RegionSelectors.getCountry);
    }
}
