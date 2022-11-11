import { Forecast } from "../../types";
import "./styles.less";

function getDay(dt: number): string {
  const day = new Date(dt * 1000).toLocaleString("en-US", { "weekday": "long" });
  const today = new Date().toLocaleString("en-US", { "weekday": "long" });
  return day === today ? "Today" : day.slice(0, 3);
}

enum Size {
  SMALL,
  NORMAL,
}

interface Props {
  forcast: Forecast;
  size?: Size;
}

export const WeatherCard: React.FC<Props> & { size: typeof Size; } = ({ forcast, size = Size.NORMAL }) => {
  return (
    <div className="weather-card">
      <div className="weather-card-content">
        <div>{getDay(forcast.dt)}</div>
        <i className={`owi owi-${forcast.weather[0].icon}`} />
        <div>
          {Math.round(forcast.temp.day)} &#176;
        </div>
        {
          size === Size.NORMAL && (
            <div>
              {forcast.weather[0].main}
            </div>
          )
        }
      </div>
    </div>
  );
}

WeatherCard.size = Size;
