import { celsiusToFahrenheit } from '../functions/temp';
import myResultsTable from './table';

const apiRes = (name, response) => {
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = name;

  const myTable = document.getElementById('myTable');
  myTable.innerHTML = '';

  const formHeader = document.getElementById('headerForm');

  const dButton = document.createElement('button');
  dButton.innerText = 'Display in °F';
  dButton.id = 'tempButton';
  dButton.classList.add('btn', 'btn-primary', 'ml-2');

  dButton.addEventListener('click', (e) => {
    e.preventDefault();
    const tempDegree = document.getElementById('tempDegrees');
    const tempMetric = document.getElementById('tempMetric');
    if (dButton.innerText === 'display in °F') {
      dButton.innerText = 'display in °C';
      tempDegree.innerHTML = 'Temp(°F)';
      tempMetric.innerHTML = celsiusToFahrenheit(response.main.temp);
    } else {
      dButton.innerText = 'display in °F';
      tempDegree.innerHTML = 'Temp(°C)';
      tempMetric.innerHTML = response.main.temp;
    }
  });

  formHeader.appendChild(dButton);

  myTable.appendChild(
    myResultsTable(
      response.main.humidity,
      response.main.pressure,
      response.main.temp,
    ),
  );
};

export default apiRes;