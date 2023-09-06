class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const msClock = new PrecisionClock("precise clock", 500);

// msClock.start(); 8a <----- Uncomment.


// 8b.

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = '07:00') {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }
  checkTime() {

    let date = new Date();
 
    let [hours, mins] = [ // Re-declaring these variables since they were previously declared inside a function, and are out-of-scope.
      date.getHours(),
      date.getMinutes(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;

    let currentTime = `${hours}:${mins}`

    if (currentTime == this.wakeupTime) {
      console.log('Wake up');
      clearInterval(this.timer);
    }
  }
  start() {
    this.display();
    this.timer = setInterval(() => (this.display(), this.checkTime()), 1000);
  }
}

const alarm = new AlarmClock("my alarmclock", '16:28');

alarm.start();
