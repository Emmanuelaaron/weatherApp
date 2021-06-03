import apiCall from '../functions/apifunc';

const myInputForm = () => {
  const myForm = document.createElement('form');
  myForm.classList.add('form-inline');
  myForm.id = 'headerForm'

  const myInput = document.createElement('input');
  myInput.classList.add('form-control', 'mr-2');
  myInput.placeholder = 'search city';

  const button = document.createElement('button');
  button.innerText = 'search';
  button.classList.add('btn', 'btn-primary');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const cityName = myInput.value;
    apiCall(cityName);
    const formHeader = document.getElementById('header');
    formHeader.innerHTML = '';
    formHeader.appendChild(myInputForm());
  });

  myForm.appendChild(myInput);
  myForm.appendChild(button);

  return myForm;
};

export default myInputForm;