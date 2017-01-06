import {getAllTasks} from '../ClickTimeAPI.js';

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';

describe('getAllTasks', () => {
  it('should return a valid response', () => {
    return getAllTasks(mockCompanyID, mockUserID)
      .then( (data) => {
        let anyTask = data[Object.keys(data)[0]]
        expect(anyTask.hasOwnProperty('Name')).toBeTruthy()
        expect(anyTask.hasOwnProperty('jobs')).toBeTruthy()
        expect(Array.isArray(anyTask.jobs)).toBeTruthy()
      })
      .fail((err, msg) => {
        console.error(msg)
        fail()
      })
  })
})
