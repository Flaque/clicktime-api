import React from 'react';

class DisplayView extends React.Component {

  renderJobs() {
    if (!this.props.selectedTask.jobs) {
      return ( <p> Nothing! </p>)
    }

    return this.props.selectedTask.jobs.map( (job) =>
      <div className="row content" key={job.JobID} >
        <div className="six columns">
          {job.DisplayName}
        </div>
        <div className="six columns">
          {job.client.DisplayName}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="displayView">

        {/* Headers */}
        <div className="row">
          <div className="six columns">
            <h6 className="upper light"> Job </h6>
          </div>
          <div className="six columns">
            <h6 className="upper light"> Client </h6>
          </div>
        </div>

        {this.renderJobs()}

      </div>
    )
  }
}

export default DisplayView;
