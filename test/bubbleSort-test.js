const bubbleSort = require('../bubbleSort')
const expect = require('chai').expect

describe('bubbleSort function', function(){
  it('alphabetizes an array of letters', function(){
    test = ['z','b','m','a']
    expect(bubbleSort(test)).to.eql(['a', 'b', 'm', 'z'])
  })
})
