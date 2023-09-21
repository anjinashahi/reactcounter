import React from "react";

export default function Buttongroup({count, setCount}){
    function increment(){
        setCount(count+1)
        console.log(count)
      }
      function decrement(){
        setCount(count-1)
      }
    return(
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    )
}