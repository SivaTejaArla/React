import React from "react";


function handleClick() {
  console.log("!!!!Button Clicked !!!!")
  }

 export default function HandleEvent() {

  
    return ( 
      <button onClick={handleClick}>     {/* Adding paranthesis () will immediatly call the function without clicking   */}
        Click me
      </button>
    );
  }