import { Continent } from './models/Continent';
import axios from 'axios';
import { Country } from './models/Country';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function jsonToContinents(json: JSON): Continent[] {
  return json[1]
    .filter((continent) => continent.id)
    .map((continent) => ({
          id: continent.id,
          code: continent.code,
          iso2code: continent.iso2code,
          name: continent.name,
    }));
}

export function getContinents$(): Observable<Continent[]> {
  return from(axios.get('http://api.worldbank.org/v2/region?format=json')).pipe(
    map((response) => jsonToContinents(response.data)),
  );
}

function jsonToCountries(json: JSON): Country[] {
  return json[1]
      .map((country) => ({
          id: country.id,
          iso2code: country.iso2code,
          name: country.name,
          capital: country.capital,
          logitude: country.longitude,
          latitude: country.latitude,
          continent: country.region,
      }));
}

function jsonToCountry(json: JSON): Country {
  const country = json[1][0];
  return {
    id: country.id,
    iso2code: country.iso2Code,
    name: country.name,
    capital: country.capitalCity,
    longitude: country.longitude,
    latitude: country.latitude,
    continent: country.region,
  };
}


export function getCountries$(regionCode: string): Observable<Country[]> {
  return from(axios.get(`http://api.worldbank.org/v2/region/${regionCode}/country?per_page=1000&format=json`)).pipe(
    map((response) => jsonToCountries(response.data)),
  );
}

export function getCountry$(id: string): Observable<Country> {
  return from(axios.get(`http://api.worldbank.org/V2/country/${id}?format=json`)).pipe(
    map((response) => jsonToCountry(response.data)),
  );
}
