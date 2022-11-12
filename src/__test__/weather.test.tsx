
import { screen, fireEvent } from '@testing-library/react'
import { forecastResponse } from "../mocks/api/handler";
import { renderWithProviders } from '../test-utils'
import App from "../App";
import { CITIES } from "../constants";

test('test weather app', async () => {
  renderWithProviders(<App />);

  // should show no weather initially, only placeholders
  expect(screen.getByTestId(`placeholder-1`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-2`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-3`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-4`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-5`)).toBeInTheDocument();


  // after some time, the weather should be received
  for (let i = 0; i <= 4; i += 1) {
    expect(await screen.findByTestId(`weather-card-${forecastResponse.list[i].dt}`)).toBeInTheDocument();
    expect(await screen.findByTestId(`weather-card-${forecastResponse.list[i].dt}-temp`)).toHaveTextContent(`${Math.round(forecastResponse.list[i].temp.day)}`);
  }

  // first element shows wheather as text
  expect(await screen.findByTestId(`weather-card-${forecastResponse.list[0].dt}-weather`))
    .toHaveTextContent(`${forecastResponse.list[0].weather[0].main}`);

  // should show placeholders while data is loading after user clicks to another tab
  fireEvent.click(screen.getByRole("button", { name: CITIES[1].name }));
  expect(screen.getByTestId(`placeholder-1`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-2`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-3`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-4`)).toBeInTheDocument();
  expect(screen.getByTestId(`placeholder-5`)).toBeInTheDocument();

});
