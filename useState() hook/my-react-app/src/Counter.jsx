import React,{useState} from "react"


function Counter(){

    const [count, Setcount] = useState(0);

    const increment = () => {
        Setcount(count+1);
    }

    const decrement = () => {
        Setcount(count-1);
    }

    const reset = () => {
        Setcount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>decrement</button>
            <button className="counter-button" onClick={reset}>reset</button>
            <button className="counter-button" onClick={increment}>increment</button>

        </div>
    );

}
export default Counter