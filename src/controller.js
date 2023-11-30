import constants from './constants';

export default function Controller() {

  async function getWeatherData(loc) {
    const response = await fetch(
      `${constants.BASE_URL}/${constants.CURRENT}?q=${loc}&key=${constants.API_KEY}`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();

    return weatherData;
  }

  function getLocationName(data) {
    return data.location.name;
  }

  function getLocationRegion(data) {
    return data.location.region;
  }

  function getLocationCountry(data) {
    return data.location.country;
  }

  function getTemp(data) {
    return data.current.temp_f;
  }

  function getConditionText(data) {
    return data.current.condition.text;
  }

  function getConditionIcon(data) {
    let icon = data.current.condition.icon;
    return `https:${icon}`;
  }

  function getWindSpeed(data) {
    return data.current.wind_mph;
  }

  function getWindDir(data) {
    return data.current.wind_dir;
  }

  function getLastUpdateTime(data) {
    return data.current.last_updated;
  }

  function getFeelsLike(data) {
    return data.current.feelslike_f;
  }

  function getPressure(data) {
    return data.current.pressure_in;
  }

  function getHumidity(data) {
    return data.current.humidity;
  }

  function getCloudCover(data) {
    return data.current.cloud;
  }

  function getIsDay(data) {
    return data.current.is_day;
  }

  function getWindGust(data) {
    return data.current.gust_mph;
  }

  class CurrentWeather {
    constructor(
      locationName,
      locationRegion,
      locationCountry,
      temp,
      conditionText,
      conditionIcon,
      windSpeed,
      windDir,
      updateTime,
      feelsLike,
      pressure,
      humidity,
      cloud,
      isDay,
      gust,
    ) {
      this.locationName = locationName;
      this.locationRegion = locationRegion;
      this.locationCountry = locationCountry;
      this.temp = temp;
      this.conditionText = conditionText;
      this.conditionIcon = conditionIcon;
      this.windSpeed = windSpeed;
      this.windDir = windDir;
      this.updateTime = updateTime;
      this.feelsLike = feelsLike;
      this.pressure = pressure;
      this.humidity = humidity;
      this.cloud = cloud;
      this.isDay = isDay;
      this.gust = gust;
    }
  }

  async function currentData(loc) {
    let data = await getWeatherData(loc);

    let locName = getLocationName(data);
    let locRegion = getLocationRegion(data);
    let locCountry = getLocationCountry(data);
    let temp = getTemp(data);
    let cond = getConditionText(data);
    let icon = getConditionIcon(data);
    let speed = getWindSpeed(data);
    let dir = getWindDir(data);
    let time = getLastUpdateTime(data);
    let feels = getFeelsLike(data);
    let pressure = getPressure(data);
    let humidity = getHumidity(data);
    let cloud = getCloudCover(data);
    let isDay = getIsDay(data);
    let gust = getWindGust(data);

    return new CurrentWeather(
      locName,
      locRegion,
      locCountry,
      temp,
      cond,
      icon,
      speed,
      dir,
      time,
      feels,
      pressure,
      humidity,
      cloud,
      isDay,
      gust,
    );
  }

  return { currentData };
}
