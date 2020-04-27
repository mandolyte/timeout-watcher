### Timeout Watcher example:


```js
<TimeoutWatcher interval={1000} iterations={3} />
```

### Complex coding example:

```js
import * as tw from './timeout-watcher';

function getRandomArbitrary(min: number, max:number) {
    return Math.random() * (max - min) + min;
}

const watchFunctionTest = () => {
    const x = getRandomArbitrary(0,100);
    if ( x >= 80 ) {
    setValue(<div>It is done</div>)
    return true;
    }
    return false;
}

const timeoutFunctionTest = () => {
    setValue(<div>It timed out!</div>)
}


console.log("_interval,_iterations",_interval,_iterations)
useEffect( () => {
    const fetchData = async () => {
    await timeoutWatcher(_interval,_iterations,watchFunctionTest,timeoutFunctionTest);
    };
    fetchData();
},[]); // eslint-disable-line react-hooks/exhaustive-deps
// the parameter [] allows the effect to skip if value unchanged
// an empty [] will only update on mount of component


<span>    {value}    </span>

```