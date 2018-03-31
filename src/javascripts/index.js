import _ from 'lodash';

if (module.hot) {
  module.hot.accept();
}

const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  element.classList.add('hello');

  return element;
};

const desctiption = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Boilerplate', 'for a Webpack and HTML'], ' ');
  element.classList.add('description');

  return element;
};

const image = () => {
  const imageInsert = document.createElement('div');
  imageInsert.innerHTML = _.join([''], ' ');
  imageInsert.classList.add('image-insert');

  return imageInsert;
};


document.body.appendChild(component());

document.body.appendChild(desctiption());

document.body.appendChild(image());
