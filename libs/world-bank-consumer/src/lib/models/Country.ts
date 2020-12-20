export type Country = {
  id: string,
  iso2code: string,
  name: string,
  capital: string,
  longitude: string,
  latitude: string,
  continent: {
    value: string,
    id: string,
  },
}
