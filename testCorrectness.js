/* eslint-env mocha, chai */
/* global chai, prime */


describe('primeGen',
  function () {
    it('primeGen(10) = [2,3,5,7]',
      function () {
        const primeslt10 = prime(10);
        chai.assert.deepEqual(primeslt10, [2, 3, 5, 7]);
      });
    it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]',
      function () {
        const primeslt20 = prime(20);
        chai.assert.deepEqual(primeslt20, [2, 3, 5, 7, 11, 13, 17, 19]);
      });
  });
