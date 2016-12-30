// Get Nth Fibonacci number

var getFibonacciNumber = function(n) {
  var series = [0,1,1];
  for(var i = 3; i < n; i++) {
    series.push(series[i-1] + series[i-2]);
  }

  return series[series.length - 1];
}

console.log(getFibonacciNumber(12));
