import React,{useState} from "react"


function MyComponent(){

    const [count, Setcount] = useState(0);

    const increment = () => {
        Setcount(c => c+1);
        Setcount(c => c+1);
    }

    const decrement = () => {
        Setcount(count-1);
    }

    const reset = () => {
        Setcount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">Count:{count}</p>
            <button className="counter-button" onClick={decrement}>decrement</button>
            <button className="counter-button" onClick={reset}>reset</button>
            <button className="counter-button" onClick={increment}>increment</button>

        </div>
    );

}
export default MyComponent