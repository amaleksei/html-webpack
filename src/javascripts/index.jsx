import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
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
          <img alt="" src="./assets/images/test-image.gif" />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<Hello />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
