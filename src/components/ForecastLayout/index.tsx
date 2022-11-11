import { useGetDailyForecastQuery } from "../../store/services/weatherApi";
import { City } from "../../types";
import { WeatherCard } from "../WeatherCard";
import { PlaceholderController } from "../PlaceholderController";
import { Placeholder } from "../Placeholder";
import "./styles.less";

interface Props {
  city: City;
}

export const ForecastLayout: React.FC<Props> = ({ city }) => {
  const { data, isFetching } = useGetDailyForecastQuery({ lat: city.lat, lon: city.lon });
  const list = data?.list || [];
  return (
    <div className="forecast-layout">
      <div className="forecast-layout-card forecast-layout-top">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder />}>
          {list[0] && <WeatherCard forcast={list[0]} />}
        </PlaceholderController>
      </div>
      {/*
          here we could use a map through data.list
          but I decided to render each element maually to avoid elements flickering
        */}
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder />}>
          {list[1] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[1]} />}
        </PlaceholderController>
      </div>
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder />}>
          {list[2] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[2]} />}
        </PlaceholderController>
      </div>
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder />}>
          {list[3] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[3]} />}
        </PlaceholderController>
      </div>
      <div className="forecast-layout-card">
        <PlaceholderController loading={isFetching} placeholder={<Placeholder />}>
          {list[4] && <WeatherCard size={WeatherCard.size.SMALL} forcast={list[4]} />}
        </PlaceholderController>
      </div>
    </div>
  );
}
