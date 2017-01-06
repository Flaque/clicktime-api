import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div id="loader">
          <div className="loader-content">
            <h4>{this.props.loaderMessage}</h4>
            <div className="nob pulse"></div>
          </div>
      </div>
    )
  }
}

export default Loader;
