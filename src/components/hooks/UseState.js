import React, { useState } from 'react'
import "./style.css"



const UseState = () =>  {

const initialData = 10;
const [myNum , setMynum] = useState(initialData)
console.log(myNum);
  return (
    <>
    <div className='centre_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={() => setMynum(myNum + 1)}>
          INC
        </div>
        <div className='button2'onClick={() => (myNum > 0 ? setMynum(myNum - 1) : setMynum(0))}>
            DIC

        </div>
    </div>
      
    </>
  )
}

export default UseState
