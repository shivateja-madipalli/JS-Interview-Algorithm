// Merge two sorted Arrays

var mergeArrays = function(ar1, ar2) {
  var i=0; j = 0;
  var res = [];
  while(i< ar1.length || j< ar2.length) {
    if(ar1[i] < ar2[j]) {
      res.push(ar1[i]);
      i++;
    }
    else if(ar1[i] > ar2[j]) {
      res.push(ar2[j]);
      j++;
    }
    else {
      if(ar2[j])
        res.push(ar2[j]);
      if(ar1[i])
        res.push(ar1[i]);
      i++;
      j++;
    }
  }
  return res;
}

console.log(mergeArrays([1,2,2,7,9],[2,3,5,6,8]));
