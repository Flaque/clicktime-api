import {getClients} from '../ClickTimeAPI.js';

const mockCompanyID = '2UKgcxIb17NY';
const mockUserID = '2i86jjewbXL4';


describe('getClients', () => {
  it('should return a valid response', () => {

    return getClients(mockCompanyID, mockUserID)
      .then( (data) => {

        // It's always good to have clients.
        expect(data.length).toBeGreaterThan(0)

        let anyClient = data[0]
        expect(anyClient.Name).toBeTruthy()
        expect(anyClient.DisplayName).toBeTruthy()
        expect(anyClient.ClientID).toBeTruthy()
      })
      .fail(fail)
  })
})
