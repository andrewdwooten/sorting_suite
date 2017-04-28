const expect = require('chai').expect
const insertionSort = require('../insertionSort')

describe('insertionSort function', function(){
  it('alphabetizes an array of letters', function(){
    test = ['z', 'y', 'x', 'w', 'v', 'u', 'a', 'b','c',
            'd', 'e', 'f', 'g', 'q', 'r', 's', 't',
            'l', 'm', 'n', 'o', 'p','h','i','j','k']
    expect(insertionSort(test)).to.eql(['a','b','c','d',
                                        'e','f','g','h',
                                        'i','j','k','l',
                                        'm','n','o','p',
                                        'q','r','s','t',
                                        'u','v','w','x',
                                        'y','z'])
  })
})
