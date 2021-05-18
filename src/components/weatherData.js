const bodyContent = () => {
  const fullBodyContent = document.createElement('div');
  fullBodyContent.classList.add(
    'vh-100', 'd-flex', 'align-items-center',
    'justify-content-center', 'container',
  );

  const cityName = document.createElement('div');
  cityName.classList.add(
    'text-muted', 'col-6',
    'text-center', 'display-3',
  );
  cityName.innerHTML = 'Welcome To myWeather';
  cityName.id = 'cityName';

  const tableSide = document.createElement('div');
  tableSide.classList.add('text-light',
    'text-center', 'bg-ifo',
    'col-6');
  tableSide.innerHTML = 'Search for any city and get the weather Stats';
  tableSide.id = 'myTable';
  fullBodyContent.appendChild(cityName);
  fullBodyContent.appendChild(tableSide);
  return fullBodyContent;
};

export default bodyContent;