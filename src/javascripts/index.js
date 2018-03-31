import _ from 'lodash';

if (module.hot) {
  module.hot.accept();
}

export const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
  element.classList.add('hello');

  return element;
};

export const desctiption = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Boilerplate', 'for a Webpack and HTML'], ' ');
  element.classList.add('description');

  return element;
};

export default component;

document.body.appendChild(component());

document.body.appendChild(desctiption());
