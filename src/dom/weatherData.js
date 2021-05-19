const bodyContent = () => {
  const fullBodyContent = document.createElement('div');
  fullBodyContent.classList.add(
    'vh-100', 'd-flex', 'align-items-center',
    'justify-content-center', 'container',
  );

  const cityName = document.createElement('div');
  const myCity = document.createElement('p');
  cityName.classList.add(
    'text-muted', 'col-6',
    'text-center', 'display-3',
  );

  cityName.id = 'cityDiv';
  myCity.innerHTML = 'Welcome To myWeather';
  myCity.id = 'cityName';

  const tableSide = document.createElement('div');
  tableSide.classList.add('text-light',
    'text-center', 'bg-ifo');
  tableSide.innerHTML = 'Search for any city and get the weather Stats';
  tableSide.id = 'myTable';
  cityName.appendChild(myCity);
  fullBodyContent.appendChild(cityName);
  fullBodyContent.appendChild(tableSide);
  return fullBodyContent;
};

export default bodyContent;