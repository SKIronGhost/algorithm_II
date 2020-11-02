// Ejercicio 1 
function a() {
  console.log('hello');
}
console.log('Dojo');

// Ejercicio 2
function b(){
  console.log('hello');
  return 15;
}
x = b();
console.log('x is', x);

// Ejercicio 3
function c(n){
  console.log('n is', n);
  return n+15;
}
x = c(3);
console.log('x is', x);

// Ejercicio 4
function d(n) {
  console.log('n is', n);
  y = n*2;
  return y;
}
x = d(3) + d(5);
console.log('x is', x);

// Ejercicio 5
function op2(a,b) {
  c = a+b;
  console.log('c is', c);
  return c;
}
x = op2(2,3) + op2(3,5);
console.log('x is', x);

// Ejercicio 6
function op(a,b) {
  c = a+b;
  console.log('c is', c);
  return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
console.log('x is', x)

// Ejercicio 7
var x = 15;
function a() {
  var x = 10;
}
console.log(x);
a();
console.log(x);
