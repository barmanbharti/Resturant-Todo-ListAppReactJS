import React, { useReducer} from 'react'
import "./style.css"


const reducer = (state , action) => {
    if(action.type === "INCR"){
        state = state + 1
    }
    if(state > 0 && action.type === "DIC"){
        state = state - 1
    }
    return state;

}

const UseReducer = () =>  {
const initialData = 10;
const [state , dispatch] = useReducer(reducer , initialData)

  return (
    <>
    <div className='centre_div'>
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type:"INCR"})}>
          INCR
        </div>
        <div className='button2'onClick={() => dispatch({type:"DIC"}) }>
            DIC
            </div>
    </div>
      
    </>
  )
}

export default UseReducer
