import 'bootstrap';
import './scss/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
function component() {
  const element = document.createElement('div');
  element.classList.add('bg-info', 'body')
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());