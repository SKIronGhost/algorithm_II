function printSum(x) {
  var sum = 0;
  for(i=0;i<=x;i++){
    y = sum+i;
    sum = sum+i;
    console.log(i);
    console.log(y);
  }


  return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640