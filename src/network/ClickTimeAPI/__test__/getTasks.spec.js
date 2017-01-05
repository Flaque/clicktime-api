import {getTasks} from '../ClickTimeAPI.js';

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';

describe('getTasks', () => {
  it('should return a valid response', () => {
    return getTasks(mockCompanyID, mockUserID)
      .then( (data) => {
        expect(Object.keys(data).length).toBeGreaterThan(0)
      })
      .fail((err, msg) => {
        console.error(msg)
        fail()
      })
  })
})
