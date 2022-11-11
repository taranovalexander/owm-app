import { Units, City } from "./types";

export const UNITS: Units = "metric";

export const OPENWEATHERMAP_API_URL = "https://api.openweathermap.org/data/2.5/";


export const CITIES: City[] = [
  {
    name: "Bratislava",
    lat: 48.1435149,
    lon: 17.108279,
    country: "SK",
    state: "Region of Bratislava"
  },
  {
    name: "Maastricht",
    lat: 50.8512438,
    lon: 5.6909768,
    country: "NL",
    state: "Limburg"
  },
  {
    name: "Porto",
    lat: 41.1494512,
    lon: -8.6107884,
    country: "PT"
  },
];
