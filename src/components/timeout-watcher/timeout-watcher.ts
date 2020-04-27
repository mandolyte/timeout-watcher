// this function will take 4 arguments:
// - interval: how long to sleep between loops
// - iterations: the maximum number of loops to do before timeout
// - a function f() that returns a Boolean:
//   - true means that what was being watched for is found and the looping can stop
//   - false means to continue looping
// - a function g() that returns void; on timeout this function is executed.


async function timeoutWatcher(interval: number, iterations: number, f: () => Boolean, g: () => void ) {
  console.log("in timeoutWatcher()")
  await (async function theLoop (iterations: number) {
    console.log("in theLoop(), interval,interations", iterations,iterations);
    setTimeout( 
      async function () {
        if (--iterations) {      // If i > 0, keep going
          console.log("Iteration#", iterations)
          let rc = await f();
          if ( rc ) {
            console.log("... f() returned true", iterations);
            return;
          }
          console.log("... f() returned false",iterations);
          theLoop(iterations);   // Call the loop again, and pass it the current value of i
        } else {
          console.log("TIMEOUT!",iterations);
          g();
        }
      }, interval 
    );

  })(iterations);

}

export default timeoutWatcher;