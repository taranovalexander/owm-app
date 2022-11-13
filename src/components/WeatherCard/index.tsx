import React from "react";
import classNames from "classnames";
import { Forecast } from "../../types";
import "./styles.less";

function getDay (dt: number): string {
  const day = new Date(dt * 1000).toLocaleString("en-US", { weekday: "long" });
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  return day === today ? "Today" : day.slice(0, 3);
}

enum Size {
  SMALL,
  NORMAL,
}

interface Props {
  forcast: Forecast
  size?: Size
}

export const WeatherCard: React.FC<Props> & { size: typeof Size } = ({ forcast, size = Size.NORMAL }: Props) => {
  return (
    <div data-testid={`weather-card-${forcast.dt}`} className={classNames("weather-card", { "weather-card-small": size === Size.SMALL })}>
      <div className="weather-card-content">
        <div className="weather-card-date">{getDay(forcast.dt)}</div>
        <div className="weather-card-icon-temp-block">
          <div className="weather-card-icon">
            <i className={`owi owi-${forcast.weather[0].icon}`} />
          </div>
          <div>
            <div data-testid={`weather-card-${forcast.dt}-temp`} className="weather-card-temp ff-teko">
              {Math.round(forcast.temp.day)} &#176;
            </div>
            {
              size === Size.NORMAL && (
                <div data-testid={`weather-card-${forcast.dt}-weather`} className="weather-card-weather">
                  {forcast.weather[0].main}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherCard.size = Size;
