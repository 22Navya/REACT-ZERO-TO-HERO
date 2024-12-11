

function Button(){
    // let count=0;
    // // const handleClick =() => console.log("OUCH!")
    // const handleClick2 =(name) => {
    //     if(count <3){
    //         count++;
    //         console.log(`${name} you  clicking  me`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking  me`);
    //     }

    // };
    const handleClick= (e) => e.target.textContent = "OUCH! 😔";

        

    return( <button onDoubleClick={(e) => handleClick(e)}>Click Me 😊</button>)

}
export default Button