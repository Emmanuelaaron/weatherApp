import apiRes from '../dom/apiResolution';
import { myBackgroundImage } from './temp';

const apiCall = (name) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=56f9e29028ed4ced524350e57e63b863`,
    { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      apiRes(name, response);
      myBackgroundImage(response.main.temp);
    });
};

export default apiCall;