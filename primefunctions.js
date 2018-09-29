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


