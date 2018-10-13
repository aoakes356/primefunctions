function prime(max) {
  let current = 2;
  let currentIndex = 0;
  const primes = _.range(2, max + 1, 1);
  const maxDiv = Math.ceil(Math.sqrt(max));
  let maxFac;
  while (current <= maxDiv && currentIndex < primes.length) {
    maxFac = (primes.length + 2) / current;
    for (let i = 2; i < maxFac; i++) {
      primes[(i * current) - 2] = undefined;
    }
    while (currentIndex < primes.length) {
      currentIndex++;
      if (primes[currentIndex] !== undefined) {
        current = primes[currentIndex];
        break;
      }
    }
  }

  return primes;
}

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
  const primesFiltered = _.filter(primes, function (p) { return p !== undefined; });
  let maxprime = 0;
  let maxindex = 0;
  const stop = primesFiltered.length;
  for (let start = 0; start < stop; start++) {
    if (Math.abs(start - stop) < maxindex) {
      break;
    }
    const arr = cumulativeSum(primesFiltered.slice(start, stop));
    for (let j = arr.length - 1; j >= 0; j--) {
      if (j + 1 <= maxindex) {
        break;
      }
      if (primes[arr[j] - 2] !== undefined) {
        if (j + 1 > maxindex) {
          maxprime = arr[j];
          maxindex = j + 1;
        }
        break;
      }
    }
  }
  return [maxprime, maxindex];
}
console.log(maxPrimeSum(100));
