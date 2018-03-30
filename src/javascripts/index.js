import _ from 'lodash';

export const component = () => {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');

  return element;
};

export default component;

document.body.appendChild(component());
