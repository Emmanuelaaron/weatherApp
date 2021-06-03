const bodyContent = () => {
  const fullBodyContent = document.createElement('div');
  fullBodyContent.classList.add(
    'vh-100', 'd-flex', 'align-items-center',
    'justify-content-center', 'container',
  );

  const cityName = document.createElement('div');
  const myCity = document.createElement('p');
  cityName.classList.add(
    'text-white', 'bg-dark', 'col-6',
    'text-center', 'display-3', 'mr-5'
  );

  cityName.id = 'cityDiv';
  myCity.innerHTML = 'Welcome To myWeather';
  myCity.id = 'cityName';

  const tableSide = document.createElement('div');
  tableSide.classList.add('text-white', 'bg-dark',
    'text-center');
  tableSide.innerHTML = 'Search for any city and get the weather Stats';
  tableSide.id = 'myTable';
  cityName.appendChild(myCity);
  fullBodyContent.appendChild(cityName);
  fullBodyContent.appendChild(tableSide);
  return fullBodyContent;
};

export default bodyContent;