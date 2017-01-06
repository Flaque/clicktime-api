import React from 'react';

class DisplayView extends React.Component {

  /**
   * Renders Job/Client headers
   */
  renderHeaders() {
    return (
      <div className="row">
        <div className="six columns">
          <h6 className="upper light"> Job </h6>
        </div>
        <div className="six columns">
          <h6 className="upper light"> Client </h6>
        </div>
      </div>
    )
  }

  /**
   * Renders a job row for each job
   */
  renderJobs() {
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

  /**
   * Renders both the headers and jobs
   */
  renderContent() {
    return (
      <div>
        {this.renderHeaders()}
        {this.renderJobs()}
      </div>
    )
  }

  /**
   * Renders a prompt if nothing is entered yet.
   */
  renderEmpty() {
    return (
      <div className="empty-warning"> Type in a task! </div>
    )
  }

  render() {
    return (
      <div className="displayView">
        {this.props.selectedTask.jobs
            ? this.renderContent()
            : this.renderEmpty()}
      </div>
    )
  }
}

export default DisplayView;
