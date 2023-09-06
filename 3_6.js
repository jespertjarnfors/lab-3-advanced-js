function multiply(a, b, c, d) {
    console.log( a * b * c * d);
    }

Function.prototype.delay = function (ms) {
    
    const originalFunction = this;

    return function (...args) {
        setTimeout(() => {
            originalFunction.apply(this, args)
        }, ms);
    }
}

multiply.delay(500)(5, 5, 5, 10); 

