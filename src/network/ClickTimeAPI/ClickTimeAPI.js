import reqwest from 'reqwest'; // Similar to AJAX in jQuery
import CONFIG from '../../../config.json';
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
    params: params,
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
  return _get(url)
}

export { getSession, getJobs, getTasks }
