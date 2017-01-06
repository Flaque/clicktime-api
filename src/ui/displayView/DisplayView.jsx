import React from 'react';

class DisplayView extends React.Component {

  constructor(props) {
    super(props)
    console.log(this.props.selectedTask)
  }

  renderJobs() {
    if (!this.props.selectedTask.jobs) {
      return ( <p> Nothing! </p>)
    }

    return this.props.selectedTask.jobs.map( (job) =>
      <div className="row content" key={job.JobID} >
        <div className="four columns">
          {job.DisplayName}
        </div>
        <div className="four columns">
          BMW
        </div>
        <div className="four columns">
          ❌
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="displayView">

        {/* Headers */}
        <div className="row">
          <div className="four columns">
            <h6 className="upper light"> Job </h6>
          </div>
          <div className="four columns">
            <h6 className="upper light"> Client </h6>
          </div>
          <div className="four columns">
            <h6 className="upper light"> Recent? </h6>
          </div>
        </div>

        {this.renderJobs()}

      </div>
    )
  }
}

export default DisplayView;
