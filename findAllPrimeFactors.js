
// find all prime factors of a number
var findAllPrimeFactors = function(numb) {
  var primeFactors = [];
  for(var i=0; i<numb; i++) {
      if((numb % i == 0) && findPrime(i)) {
        primeFactors.push(i);
      }
  }
  return primeFactors;
}

function findPrime(numb) {
  if(i == 1) {
    return false;
  }
  else if(i == 2) {
    return true;
  }
  else {
    for(var i=2; i<numb; i++) {
      if(numb%i == 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(findAllPrimeFactors(26));
