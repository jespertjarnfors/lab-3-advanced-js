function printMe(msg) {
  console.log('printing debounced message:', msg);
}

function debounce(func, delay) {
  let timeout;

  return function (...args) { 
      clearTimeout(timeout);

      const msg = args; 

      timeout = setTimeout(function () {
          func.apply(this, args); 
      }, delay, msg); 
  };
}

printMe = debounce(printMe, 900);

setTimeout(() => printMe("hello 1"), 100);
setTimeout(() => printMe("hello 2"), 200);
setTimeout(() => printMe("hello 3"), 300);
