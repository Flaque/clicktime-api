import {getSession} from '../ClickTimeAPI.js';

describe('getSession', () => {
  it('should return a valid response', () => {
    return getSession()
      .then( (data) => {
        expect(data.UserID).toBeTruthy()
        expect(data.CompanyID).toBeTruthy()
      })
      .fail(fail)
  })
})
