function printSumArray(x) {
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum = sum + x[i];
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6