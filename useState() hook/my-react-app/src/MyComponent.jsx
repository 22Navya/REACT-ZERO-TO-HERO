import React,{useState} from "react"

function MyComponent(){

    const[name,setName]=useState("Guest");
    const [age,setAge]=useState(0);
    const [isEmployed,setEmployed]=useState(false);

    const updateName=() => {
        setName("Navya")

    }
    const incrementAge =() => {
        setAge(age+2);
    }

    const toggleEmployedStatus = () => {
        setEmployed(!isEmployed);
    }
        

    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>set Name</button>

            <p>age:{age}</p>
            <button onClick={incrementAge}>set Age</button>

            <p> Is Employed:{isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );

}
export default MyComponent