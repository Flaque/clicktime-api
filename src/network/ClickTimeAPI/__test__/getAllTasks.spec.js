import {getAllTasks} from '../ClickTimeAPI.js';

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';

describe('getAllTasks', () => {
  it('should return a valid response', () => {
    return getAllTasks(mockCompanyID, mockUserID)
      .then( (data) => {
        let anyTask = data[Object.keys(data)[0]]
        expect(anyTask.hasOwnProperty('Name')).toBeTruthy()

        // Jobs exist
        expect(anyTask.hasOwnProperty('jobs')).toBeTruthy()
        expect(Array.isArray(anyTask.jobs)).toBeTruthy()

        // Client exists within job
        expect(anyTask.jobs[0].hasOwnProperty('client'))
      })
      .fail((err, msg) => {
        console.error(msg)
        fail()
      })
  })
})
