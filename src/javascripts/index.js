import _ from 'lodash';
import '../scss/main.scss';
// import main from '../scss/main.scss';

export const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');
  element.classList.add('hello');

  return element;
};

export default component;

document.body.appendChild(component());
