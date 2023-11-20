function add() {
    // we'll fill this in shortly
  }
  function subtract() {

  }
  function multiply() {

  }
  function divide() {

  }
function add() {
  return "something";
}
function add(a, b) {
  return a + b;
}
function subtract() {
  return "something";
}
function subtract(a, b) {
  return a - b;
}
function multiply() {
  return "something";
}
function multiply(a, b) {
  return a * b;
}
function divide() {
  return "something";
}
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  function increment(n) {
    return ++n;
  }
  
  let number = 5;
  console.log(increment(number)); // Output: 6
  console.log(number); // Output: 5
  
  function decrement(n) {
    return --n;
  }
  
  number = 5;
  console.log(decrement(number)); // Output: 4
  console.log(number); // Output: 4
  function makeInt(n) {
    const parsedInt = parseInt(n, 10);
    return isNaN(parsedInt) ? NaN : parsedInt;
  }
  function preserveDecimal(n) {
    return parseFloat(n);
  }