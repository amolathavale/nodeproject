'use strict'

const assert = require('chai').assert
const should = require('chai').should()
const app = require('../app')

describe('Addition', () => {
    it('adding 3 and 5 gives 8', () => {
        let result = app.add(3,5)
        result.should.equal(8)
    })
})


