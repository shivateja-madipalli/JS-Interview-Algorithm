// find prime
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

findPrime(1);
