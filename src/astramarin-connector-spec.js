'use strict'

/* eslint-env mocha */
const assert = require('assert')
const astramarinConnector = require('.')

describe('astramarin-connector', () => {
  it('write this test', () => {
    // console.assert(astramarinConnector, 'should export something')
    assert.equal(typeof astramarinConnector, 'function')
  })
})
