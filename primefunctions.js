function prime(max) {
  const primes = [2];
  _.filter(_.range(2, max, 1), // Generate a list of numbers from 2 to max.
    function (isprime) {
      if (_.every(primes,
        function (div) {
          return (isprime % div !== 0 && isprime !== div); // Checks if divisible by all currently known primes.
        })) {
        primes.push(isprime); return true;// Adds to array of primes if it passes.
      } return false;
    });
  return primes;
}
console.log(prime(1000));

function cumulativeSum(numbers) {
  const num = numbers;
  for (let i = 1; i < numbers.length; i++) {
    num[i] += numbers[i - 1];
  }
  return num;
}
console.log(cumulativeSum([1, 2, 3, 4]));

function maxPrimeSum(max) {
  const primes = prime(max);
  const len = primes.length;
  let maxSum = 0;
  let maxCon = 0;
  let temp;
  let maxTemp;
  let lenTemp;
  let start = 0;
  while (start < len) {
    temp = cumulativeSum(primes.slice(start, len));
    console.log(temp);
    maxTemp = _.max(_.filter(temp, function (sum) { return _.indexOf(primes, sum) !== -1; }));
    lenTemp = _.indexOf(temp, maxTemp);
    if (lenTemp > maxCon) {
      maxSum = maxTemp;
      maxCon = lenTemp;
    }
    start++;
  }
  return [maxSum, maxCon];
}
const foo = 'foo';
console.log(maxPrimeSum(100));
