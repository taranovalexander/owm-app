import { useGetDailyForecastQuery } from "../../store/services/weatherApi";
import { City, Forecast } from "../../types";
import { WeatherCard } from "../WeatherCard";
import { PlaceholderController } from "../PlaceholderController";
import { Placeholder } from "../Placeholder";
import "./styles.less";

interface Props {
  city: City
}

export const ForecastLayout: React.FC<Props> = ({ city }) => {
  const { data, isFetching } = useGetDailyForecastQuery({ lat: city.lat, lon: city.lon });
  const list: Forecast[] = data?.list || [];
  return (
    <div className="forecast-layout">
      <div className="forecast-layout-card forecast-layout-top">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder dataTestid="placeholder-1" />}>
          {list[0] && <WeatherCard forcast={list[0]} />}
        </PlaceholderController>
      </div>
      {/*
          here we could use a map through data.list
          but I decided to render each element maually to avoid elements flickering
        */}
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder dataTestid="placeholder-2" />}>
          {list[1] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[1]} />}
        </PlaceholderController>
      </div>
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder dataTestid="placeholder-3" />}>
          {list[2] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[2]} />}
        </PlaceholderController>
      </div>
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder dataTestid="placeholder-4" />}>
          {list[3] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[3]} />}
        </PlaceholderController>
      </div>
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder dataTestid="placeholder-5" />}>
          {list[4] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[4]} />}
        </PlaceholderController>
      </div>
    </div>
  );
};
