import celsiusToFahrenheit from '../functions/temp';
import myResultsTable from './table';

const apiRes = (name, response) => {
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = name;

  const myTable = document.getElementById('myTable');
  myTable.innerHTML = '';

  const display = document.createElement('p');
  display.innerHTML = 'display in °F';
  display.id = 'temp';

  display.addEventListener('click', (e) => {
    e.preventDefault();
    const displayLink = document.getElementById('temp');
    const tempDegree = document.getElementById('tempDegrees');
    const tempMetric = document.getElementById('tempMetric');
    if (displayLink.innerHTML === 'display in °F') {
      displayLink.innerHTML = 'display in °C';
      tempDegree.innerHTML = 'Temp(°F)';
      tempMetric.innerHTML = celsiusToFahrenheit(response.main.temp);
    } else {
      displayLink.innerHTML = 'display in °F';
      tempDegree.innerHTML = 'Temp(°C)';
      tempMetric.innerHTML = response.main.temp;
    }
  });

  myTable.appendChild(
    myResultsTable(
      response.main.humidity,
      response.main.pressure,
      response.main.temp,
    ),
  );
  myTable.appendChild(display);
};

export default apiRes;