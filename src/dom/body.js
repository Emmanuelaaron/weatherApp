import myInputForm from './inputForm';
import bodyContent from './weatherData';

const body = () => {
  const fullBody = document.createElement('div');
  fullBody.classList.add('vh-100', 'fullBody');
  fullBody.id = "myBody"

  const header = document.createElement('div');
  header.classList.add(
    'col-12', 'bg-ifo',
    'pt-4', 'd-flex',
    'justify-content-end',
  );
  header.id = 'header';

  const myLoaderDiv = document.createElement('div');
  myLoaderDiv.classList.add(
    'col-12', 'd-flex',
    'align-items-center',
    'justify-content-center',
  );

  header.appendChild(myInputForm());
  fullBody.appendChild(header);
  fullBody.appendChild(myLoaderDiv);
  fullBody.appendChild(bodyContent());
  return fullBody;
};

export default body;