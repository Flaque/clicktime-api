import reqwest from 'reqwest'; // Similar to AJAX in jQuery
import CONFIG from '../../../config.json';
import Q from 'q'; // Using CommonJS promises for simplicity sake
const API = CONFIG.ClickTimeAPI;

/**
 * ERRORS
 */
const NO_COMPANY_ID = "ERROR: CompanyID doesn't seem to exist!"
const NO_USER_ID = "ERROR: UserID doesn't seem to exist!"

/**
 * Sends a GET "reqwest" and returns a promise
 * @return Promise
 */
function _get(url, params) {
  params = params || [] // Optional params

  return reqwest({
    url: url,
    data: params,
    type: 'jsonp'
  })
}

/**
 * Generates a url in the format:
 * <base>/Companies/<companyID>/Users/<userID>/<route>
 *
 * @return String
 */
function _urlWithAuth(companyID, userID, route) {
  if (!companyID) throw NO_COMPANY_ID
  if (!userID) throw NO_USER_ID
  let company = `${API.routes.companies}/${companyID}` // `/companies/EX8MPLE`
  let user = `${API.routes.users}/${userID}`  // `/users/EX8MPLE`
  return `${API.base}${company}${user}${route}` // Full path
}

/**
 * Converts Tasks data to an object with Name keys that can be accessed
 * in O(1) time. We can abuse the fact that the tasks have unique names.
 *
 * Ex:
 * {
 *  "2ZJ6Ug40lXrI" : { <task_data> },
 *  ...
 * }
 *
 * @return JSON
 */
function _convertTasksToObject(data) {
  var dict = {}
  data.forEach((item) => { dict[item.TaskID] = item })
  return dict
}

/**
 * Creates a list of objects with task names as keys and
 * all the information (including their job object) as data.
 *
 * @return [JSON, ..., JSON]
 */
function _createTaskReferenceObjects(jobs, tasks) {
  jobs.forEach( (job) => {
    job.PermittedTasks.split(",").forEach( (taskId) => {
      if (!taskId) return
      if (tasks[taskId].jobs !== undefined) {
        tasks[taskId].jobs.push(job)
      } else {
        tasks[taskId].jobs = [job]
      }
    })
  })

  return tasks
}

/**
 * Gets all Tasks
 */
function getAllTasks(companyID, userID) {

  return Q.all([getJobs(companyID, userID, true), getTasks(companyID, userID)])
    .then((allData) => { // all will combine datasets from both requests
      let jobs = allData[0]
      let tasks = allData[1]
      return _createTaskReferenceObjects(jobs, tasks)
    })
}

/**
 * Gets the session (for User and CompanyID)
 * @return Promise
 */
function getSession() {
  return _get(`${API.base}${API.routes.session}`)
}

/**
 * Gets jobs for the companyID and userID:
 * <base>/Companies/<companyID>/Users/<userID>/jobs
 *
 * @return Promise
 */
function getJobs(companyID, userID, withChildIDs) {
  let url = _urlWithAuth(companyID, userID, API.routes.jobs)
  return _get(url, {'withChildIDs': withChildIDs})
}

/**
 * Gets tasks for the companyID and userID:
 * <base>/Companies/<companyID>/Users/<userID>/tasks
 */
function getTasks(companyID, userID) {
  let url = _urlWithAuth(companyID, userID, API.routes.tasks)
  return _get(url).then(_convertTasksToObject)
}

export { getSession, getJobs, getTasks, getAllTasks }
