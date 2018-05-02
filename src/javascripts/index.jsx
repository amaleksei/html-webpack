import React from 'react';
import ReactDOM from 'react-dom';

const createReactClass = require('create-react-class');

const Hello = createReactClass({
  render() {
    return (
      <div>
        <div className="hello">
          <span>Hello webpack!</span>
        </div>
        <div className="description">
          <span>Boilerplate for a Webpack and React</span>
        </div>
        <div className="image-insert">
          <img alt="Hard programming" src="./assets/images/test-image.gif" />
        </div>
      </div>
    );
  },
});

const mountNode = document.getElementById('root');
ReactDOM.render(<Hello />, mountNode);

if (module.hot) {
  module.hot.accept();
}
