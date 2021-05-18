import myInputForm from '../components/inputForm';
import bodyContent from '../components/weatherData'

const body = () => {
  const fullBody = document.createElement('div');
  fullBody.classList.add('vh-100', 'fullBody');

  const header = document.createElement('div');
  header.classList.add(
    'col-12', 'bg-ifo',
    'pt-4', 'd-flex',
    'justify-content-end',
  );
  header.id = 'header'

  header.appendChild(myInputForm());
  fullBody.appendChild(header);
  fullBody.appendChild(bodyContent())
  return fullBody;
};

export default body;