import React,{useEffect, useState} from "react";

function MyComponent1(){
    const[width,setWidth]=useState(window.innerWidth);
    const [height,setheight]=useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return () =>{
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    },[]);

    useEffect(() => {
        document.title = `size : ${width} ${height}`;
    },[width,height]);

    

    

    function handleResize(){
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return (
        <>
        <p>window width:{width}px</p>
        <p>window height:{height}px</p>
        </>
    );


}
export default MyComponent1