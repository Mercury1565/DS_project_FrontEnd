import React , {useState} from 'react';

function Counter()
{
    const [count , setCount] = useState(0);

    const increment = () => {
        //setCount(count => count + 1) // This is not a good practice
        
        // All the 3 below will be batchec up togeter and the increment 
        // will be done only once

        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        // and hence, use Updater functions to avoid this

        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }   
    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const reset = () => {   
        setCount(c => c = 0)   
    }

    return(
        <div>
            <h1> Counter: {count} </h1>
            <button onClick = {increment}> Increment </button>
            <button onClick = {decrement}> Decrement </button>
            <button onClick = {reset}> Reset </button>
        </div>
    );

}

export default Counter;