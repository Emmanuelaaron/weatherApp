const celsiusToFahrenheit = (celsius) => {
  let res;
  res = celsius * 1.8;
  res += 32;
  return res;
};

const myBackgroundImage = (temp) => {
  const image = document.getElementById('myBody');
  if (temp >= 23) {
    if (image.classList.contains('hot') === false) {
      image.classList.add('hot');
      image.classList.remove(
        'hot1',
        'fullBody',
        'warm',
        'warm1',
        'cold',
        'cold1',
      );
    } else {
      image.classList.add('hot1');
      image.classList.remove('hot',
        'fullBody',
        'warm',
        'warm1',
        'cold',
        'cold1');
    }
  } else if (temp >= 15 && temp <= 22) {
    if (image.classList.contains('warm') === false) {
      image.classList.add('warm');
      image.classList.remove(
        'fullBody',
        'hot1',
        'hot',
        'warm1',
        'cold',
        'cold1',
      );
    } else {
      image.classList.add('warm1');
      image.classList.remove(
        'fullBody',
        'hot1',
        'hot',
        'warm',
        'cold',
        'cold1',
      );
    }
  } else if (temp <= 14) {
    if (image.classList.contains('cold') === false) {
      image.classList.add('cold');
      image.classList.remove(
        'fullBody',
        'hot1',
        'hot',
        'warm1',
        'warm',
        'cold1',
      );
    } else {
      image.classList.add('cold1');
      image.classList.remove(
        'fullBody',
        'hot1',
        'hot',
        'warm1',
        'warm',
        'cold',
      );
    }
  }
};

export { celsiusToFahrenheit, myBackgroundImage };