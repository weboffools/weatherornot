import Controller from './controller';

export default function DOM(loc='59701') {
  const container = document.createElement('div');
  container.classList.add('container');

  const currentWeather = document.createElement('div');
  currentWeather.classList.add('current-weather');

  const iconArea = document.createElement('img');

  const tempArea = document.createElement('div');
  tempArea.classList.add('temp-area');

  const otherData = document.createElement('div');
  otherData.classList.add('other-data');
  const userLoc = document.createElement('span');
  userLoc.classList.add('location');
  const temp = document.createElement('span');
  temp.classList.add('temp');
  const conditionText = document.createElement('span');
  conditionText.classList.add('conditions');
  const wind = document.createElement('span');
  wind.classList.add('wind');
  const updateTime = document.createElement('span');
  updateTime.classList.add('update-time');
  const feelsLike = document.createElement('span');
  feelsLike.classList.add('feels-like');
  const pressure = document.createElement('span');
  pressure.classList.add('pressure');
  const humidity = document.createElement('span');
  humidity.classList.add('humidity');
  const cloud = document.createElement('span');
  cloud.classList.add('cloud-cover');
  const gust = document.createElement('span');
  gust.classList.add('gust');


  function queryUserForm() {
    const form = document.createElement('form');
    const locInput = document.createElement('input');
    const locLabel = document.createElement('label');
    const btn = document.createElement('button');

    form.id = 'query-form';
    form.method = 'post';
    form.action = '';

    locInput.id = 'user_input';
    locInput.name = 'user_input';
    locInput.type = 'text';
    locLabel.setAttribute('for', 'user_input');
    locLabel.textContent = 'Set Your Location: ';

    btn.type = 'submit';
    btn.textContent = 'Submit';

    form.append(locLabel, locInput, btn);

    return form;
  }

  Controller()
    .currentData(loc)
    .then((value) => {
      iconArea.src = value.conditionIcon;
      userLoc.textContent = `${value.locationName}, ${value.locationRegion}, ${value.locationCountry}`;
      temp.textContent = `${value.temp} \u00B0F`;
      feelsLike.textContent = `Feels Like: ${value.feelsLike} \u00B0F`;
      conditionText.textContent = `${value.conditionText}`;
      tempArea.append(userLoc, temp, feelsLike, conditionText);
      updateTime.textContent = `Updated: ${value.updateTime}`;
      cloud.textContent = `Cloud Cover: ${value.cloud}%`;
      pressure.textContent = `Pressure: ${value.pressure} in.`;
      humidity.textContent = `Humidity: ${value.humidity}%`;
      wind.textContent = `Wind: ${value.windSpeed} mph ${value.windDir}`;
      gust.textContent = `Gusts: ${value.gust} mph`;
      otherData.append(updateTime, wind, gust, pressure, humidity, cloud);
    });

  currentWeather.append(iconArea, tempArea, otherData);
  container.append(currentWeather);
  container.append(queryUserForm());

  return container;
}
