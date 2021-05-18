import myResultsTable from '../dom/table'
const apiCall = (name) => {
  let myName = JSON.stringify(name)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=56f9e29028ed4ced524350e57e63b863`,
  { mode: 'cors' },
  )
    .then((response) => {
      return response.json();
    })
    .then(function (response){
      console.log(response.main)
      const cityName = document.getElementById('cityName')
      cityName.innerHTML = name
      
      const myTable = document.getElementById('myTable')
      myTable.innerHTML = ''
      // myTable.classList.add('tableData')
      myTable.appendChild(myResultsTable(response.main.humidity, response.main.pressure, response.main.temp))
    })
};

export default apiCall;