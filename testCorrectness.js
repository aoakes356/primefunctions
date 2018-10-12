/* eslint-env mocha, chai */
/* global chai, prime, cumulativeSum, maxPrimeSum */


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

describe('cumulativeSum',
  function () {
    it('cumulativeSum([1, 2, 3, 4]) => [1, 3, 6, 10]',
      function () {
        const cumulativeSum1234 = cumulativeSum([1, 2, 3, 4]);
        chai.assert.deepEqual(cumulativeSum1234, [1, 3, 6, 10]);
      });
    it('cumulativeSum([10, 11, 12, 13, 14]) => [10, 21, 33, 46,60]',
      function () {
        const cumulativeSum1234 = cumulativeSum([10, 11, 12, 13, 14]);
        chai.assert.deepEqual(cumulativeSum1234, [10, 21, 33, 46, 60]);
      });
  });
describe('maxPrimeSum',
  function () {
    it('maxPrimeSum(100) => [41,6]',
      function () {
        const primeSum100 = maxPrimeSum(100);
        chai.assert.deepEqual(primeSum100, [41, 6]);
      });
    it('maxPrimeSum(1000) => [953, 21]',
      function () {
        const primeSum1000 = maxPrimeSum(1000);
        chai.assert.deepEqual(primeSum1000, [953, 21]);
      });
  });
