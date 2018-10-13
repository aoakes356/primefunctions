/* eslint-env mocha, chai */
/* global chai, maxPrimeSum */

describe('maxPrimeSum',
  function () {
    this.slow(0);
    it('maxPrimeSum(10000) should take less than 20ms',
      function () {
        this.timeout(20);
        const mpsbig = maxPrimeSum(10000);
        chai.assert.deepEqual(mpsbig, [9521, 65]);
      });
    it('maxPrimeSum(100000) should take less than 500ms',
      function () {
        this.timeout(500);
        const mpsbigger = maxPrimeSum(100000);
        chai.assert.deepEqual(mpsbigger, [92951, 183]);
      });
  });
