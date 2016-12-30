// greatest Common Divisor
var greatestCommonDivisor = function(n1, n2) {
  var max = 0;
  for(var i=0; i<=Math.min(n1, n2); i++) {
    if(n1 % i == 0 && n2 % i == 0) {
      max = Math.max(max, i);
    }
  }
  return max;
}

console.log(greatestCommonDivisor(72, 81));
