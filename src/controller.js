import constants from './constants';

export default function Controller() {
  const loc = '59701';

  async function getWeatherData(location) {
    const response = await fetch(
      `${constants.BASE_URL}/${constants.CURRENT}?q=${location}&key=${constants.API_KEY}`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();

    return weatherData;
  }

  function getTemp(data) {
    return data.current.temp_c;
  }

  function getConditions(data) {
    return data.current.condition;
  }

  class CurrentWeather {
    constructor(temp, conditions) {
      this.temp = temp;
      this.conditions = conditions;
    }
  }

  async function currentData() {
    let data = await getWeatherData(loc);
    let temp = getTemp(data);
    let cond = getConditions(data);

    return new CurrentWeather(temp, cond);
  }

  return { currentData };
}
