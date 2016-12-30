// Remove dup vals in an array
var removeDups = function(ar) {
  var array = [];
  for(var i=0; i<ar.length; i++) {
    if(array.indexOf(ar[i]) === -1) {
      array.push(ar[i]);
    }
  }
  return array;
}

console.log(removeDups([1,2,2,2,4,6,1,1]));
