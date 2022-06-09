class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      // this.currentTime++;
      // let starttimer = this.currentTime++;
      // return setTime(starttimer);     
      this.currentTime++
      if (printTimeCallback) {
        return printTimeCallback()
      }
    },1000);

    // this.currentTime = setInterval((setStart) => {
    //   return this.intervalId++;      
    // },1000)    
    // return printTimeCallback();
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here   
      return this.currentTime%60;   
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  //  let twodigit = this.currentTime;
  //   if ((String(value)).length = 1 ) {
  //     return `0${value}`;
  //   }
  //  else return String(value);

    if (value < 10) {
      let compute = `0`+value;
      return String(compute);
    }else return String(value);
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds());        
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

//teste cpnsole.log

// console.log(start())
// console.log(stop())
// console.log(computeTwoDigitNumber())
// console.log(getMinutes())
// console.log(getSeconds())
// console.log(reset())
// console.log(split())


