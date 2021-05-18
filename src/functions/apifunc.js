import myResultsTable from '../dom/table';

const apiCall = (name) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=56f9e29028ed4ced524350e57e63b863`,
    { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      const cityName = document.getElementById('cityName');
      cityName.innerHTML = name;

      const myTable = document.getElementById('myTable');
      myTable.innerHTML = '';
      myTable.appendChild(
        myResultsTable(
          response.main.humidity,
          response.main.pressure,
          response.main.temp,
        ),
      );
    });
};

export default apiCall;