let startFrom = 0;

let incrementBy;

function makeCounter(startFrom = 0, incrementBy = 1) {
  return function () {
    startFrom = startFrom + incrementBy;
    console.log(startFrom);
    return startFrom;
  };
}

let counter1 = makeCounter(5, 3);
let counter2 = makeCounter();

counter1(); // 8
counter1(); // 11
counter1(); // 14
counter2(); // 1
counter2(); // 2
