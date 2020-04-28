### Timeout Watcher example:


```js
<TimeoutWatcher interval={1000} iterations={3} />
```

### Complex coding example:

Please ignore the error shown and open the console window (Ctrl-Shift-J) to view the console messages.

```ts
import timeoutWatcher from './timeout-watcher';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const watchFunctionTest = () => {
    const x = getRandomArbitrary(0,100);
    if ( x >= 80 ) {
        console.log("Done: watch function returns true")
        return true;
    }
    console.log("Not Done: watch function returns false")
    return false;
}

const timeoutFunctionTest = () => {
    console.log("Timeout!")
}

const interval = 1000
const iterations = 10
console.log("interval,iterations",interval,iterations)
timeoutWatcher(interval,iterations,watchFunctionTest,timeoutFunctionTest);
console.log("timeoutWatcher() has completed")


```