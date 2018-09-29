function prime(max) {
  const primes = [2];
  _.filter(_.range(2, max, 1),
    function (isprime) {
      if (_.every(primes,
        function (div) {
          return (isprime % div !== 0 && isprime !== div);
        })) {
        primes.push(isprime); return true;
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
