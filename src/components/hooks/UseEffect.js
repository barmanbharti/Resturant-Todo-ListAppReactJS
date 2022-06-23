import React, {useEffect , useState } from 'react'
import "./style.css"





const UseEffect = () =>  {

//const initialData = 0;
const [myNum , setMynum] = useState(0)

useEffect (() => {
document.title = `chats(${myNum})`;
    })

  return (
    <>
    <div className='centre_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={() => setMynum(myNum + 1)}>
          INC
        </div>
    </div>
      
    </>
  )
}

export default UseEffect;
