import React from 'react';

class DisplayView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="displayView">
        {this.props.selectedTask ? (
          <p> {this.props.selectedTask.Name} </p>
        ) : (
          <p> ... </p>
        )}
      </div>
    )
  }
}

export default DisplayView;
