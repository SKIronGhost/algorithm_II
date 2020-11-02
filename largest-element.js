function largestElement(x){
  
  var y=0;

  for(i=0;i<x.length;i++){
    
    if (y<x[i]){
      y=x[i];
    }
    
    // console.log(y)
  }
  return y
}
// largestElement([1,30,5,7])
console.log(largestElement([1,30,5,7]));
