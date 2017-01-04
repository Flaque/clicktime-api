import {getJobs} from '../ClickTimeAPI.js';

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';

describe('getJobs', () => {
  it('should return a valid response', () => {

    return getJobs(mockCompanyID, mockUserID, true)
      .then( (data) => {

        // Hopefully we should be doing something!
        expect(data.length).toBeGreaterThan(0)

        // Does every job have to have a task? If so I would like to
        // test for that here.
      })
      .fail(fail)
  })
})
