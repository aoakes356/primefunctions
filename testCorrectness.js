/* eslint-env mocha, chai */
/* global foo, chai */

describe('foo',
  function () {
    it('must be string',
      function () {
        chai.expect(foo).to.be.a('string');
      });
  });
