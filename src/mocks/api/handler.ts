
import { rest } from "msw";

export const forecastResponse = { city: { id: 3060972, name: "Bratislava", coord: { lon: 17.1083, lat: 48.1435 }, country: "SK", population: 423737, timezone: 3600 }, cod: "200", message: 23.1684358, cnt: 7, list: [{ dt: 1668247200, sunrise: 1668232409, sunset: 1668266282, temp: { day: 12.34, min: 6.48, max: 14.06, night: 7.71, eve: 8.88, morn: 6.79 }, feels_like: { day: 10.96, night: 6.55, eve: 8.88, morn: 4.79 }, pressure: 1033, humidity: 51, weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }], speed: 2.96, deg: 326, gust: 4.56, clouds: 96, pop: 0 }, { dt: 1668333600, sunrise: 1668318901, sunset: 1668352607, temp: { day: 10.92, min: 5.11, max: 12.79, night: 6.65, eve: 9.13, morn: 5.68 }, feels_like: { day: 9.74, night: 4.59, eve: 7.65, morn: 3.92 }, pressure: 1030, humidity: 64, weather: [{ id: 800, main: "Clear", description: "sky is clear", icon: "01d" }], speed: 4.17, deg: 146, gust: 6.5, clouds: 5, pop: 0 }, { dt: 1668420000, sunrise: 1668405394, sunset: 1668438934, temp: { day: 9.7, min: 5.18, max: 13.4, night: 7.57, eve: 11.52, morn: 5.5 }, feels_like: { day: 7.27, night: 5.74, eve: 10.42, morn: 2.94 }, pressure: 1024, humidity: 68, weather: [{ id: 800, main: "Clear", description: "sky is clear", icon: "01d" }], speed: 6.36, deg: 153, gust: 10.84, clouds: 2, pop: 0 }, { dt: 1668506400, sunrise: 1668491885, sunset: 1668525263, temp: { day: 10.31, min: 6.75, max: 13.3, night: 7.42, eve: 10.98, morn: 7.01 }, feels_like: { day: 9.28, night: 6.11, eve: 9.96, morn: 5.2 }, pressure: 1019, humidity: 72, weather: [{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }], speed: 4.52, deg: 160, gust: 7.02, clouds: 80, pop: 0 }, { dt: 1668592800, sunrise: 1668578377, sunset: 1668611594, temp: { day: 9.08, min: 5.48, max: 11.33, night: 8.94, eve: 10.11, morn: 5.62 }, feels_like: { day: 7.94, night: 7.57, eve: 9.27, morn: 3.74 }, pressure: 1009, humidity: 83, weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }], speed: 2.5, deg: 318, gust: 4.13, clouds: 100, pop: 0 }, { dt: 1668679200, sunrise: 1668664868, sunset: 1668697927, temp: { day: 9.14, min: 6.55, max: 10.5, night: 8.63, eve: 9.15, morn: 6.55 }, feels_like: { day: 7.7, night: 8.63, eve: 9.15, morn: 4.53 }, pressure: 1013, humidity: 77, weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }], speed: 2.77, deg: 321, gust: 4.68, clouds: 100, pop: 0.06 }, { dt: 1668765600, sunrise: 1668751358, sunset: 1668784263, temp: { day: 8.89, min: 8.04, max: 9.27, night: 8.04, eve: 8.79, morn: 8.3 }, feels_like: { day: 8.89, night: 8.04, eve: 8.79, morn: 7.69 }, pressure: 1014, humidity: 88, weather: [{ id: 500, main: "Rain", description: "light rain", icon: "10d" }], speed: 1.73, deg: 77, gust: 2.44, clouds: 100, pop: 1, rain: 1.63 }] };

export const handlers = [
  rest.get("https://api.openweathermap.org/data/2.5/forecast/daily", (req, res, ctx) => {
    return res(ctx.json(forecastResponse), ctx.delay(150));
  })
];