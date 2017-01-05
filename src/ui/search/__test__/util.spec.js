import {matchTerm} from '../util.js'

describe("The Search Utility's", () => {

  it("matchTerm() function will match a character correctly", () => {
    let item = {name: 'test'}
    expect(matchTerm(item, 't')).toBeTruthy()
    expect(matchTerm(item, 'z')).toBeFalsy()
    expect(matchTerm(item, '')).toBeTruthy()
  })

})
