
// 10a.

function printFibonacci(limit) {
  let counter = 0;
  let num1 = 1;
  let num2 = 0;
  let total = 0;

  let intervalCounter = setInterval(function repeatThis() {
    if (counter === limit) {
      clearInterval(intervalCounter);
    } else {
      total = num1 + num2;
      num2 = num1;
      num1 = total;
      counter++;
      console.log(total);
    }
  }, 1000);
}

// (printFibonacci(12)); // <--- Uncomment.


// 10b & 10c.


function printFibonacciTimeouts(limit) {
  let totalSum = 0;
  let number1 = 1;
  let number2 = 0;
  let counter = 0;
  
  function repeatThis() {
    if (counter === limit) {
      clearInterval(repeatThis);
    } else {
    totalSum = number1 + number2;
    number2 = number1;
    number1 = totalSum;
    console.log(totalSum);
    counter++;
    setTimeout(repeatThis, 1000);
    }
  }
  repeatThis();

}
printFibonacciTimeouts(10);
