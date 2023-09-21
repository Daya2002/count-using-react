import React, { useState } from 'react';

const Count = () => {
 
    let [state, setState] = useState(0)
    const increaseHandler = () =>{
    setState(state +=1)
    }
    const decreaseHandler = () =>{
    setState(state-1)
    }

  return (
    <>
     <div className="flex justify-center justify-content ali">
        <button onClick={increaseHandler}>+</button>
        <div>{state}</div>
        <button onClick={decreaseHandler}>-</button>
    </div>

    </>
  )
}

export default Count;
