import React, { useEffect, useState } from 'react'
import "./style.css"
//get localstorage data back
const getLocalData = () => {
    const List = localStorage.getItem('mytodoList');
    console.log(List);
    if(List){
        return JSON.parse (List);
    }else{
        return[];
    }
}

const Todo = () => {
    const[inputData,setInputData] = useState()
    const[items,setItems] = useState(getLocalData());
    const [iseditItem,seteditItem] = useState('')
    const [toggleButton , setToggleButton] = useState(false)
    //add the items function
    const addItem = () => {
        if(!inputData){
            alert("plz fill the data")
        }else{
            const myNewData ={  
                id: new Date().getTime().toString(),
                name:inputData
            }
            setItems([...items , myNewData]);
            setInputData("");
        }
    };
    //edit button
    const editItem = (index) => {
       const item_todo_edited = items.find((curElem) => {
           return curElem.id === index;
       });
       setInputData(item_todo_edited.name);
       seteditItem(index);
       setToggleButton(true);
    };
    

    //how to delete items section
    const deleteItem = (index) => {

        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updatedItem);
       }
       //Remove all items
    const RemoveAll= () => {
          setItems([]);
    };
    //adding local storage
    useEffect(() => {
     localStorage.setItem("mytodoList",JSON.stringify(items))
    },[items])

    return (
        <> 
  
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.jfif" alt="todologo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder='✍ Add Item'
                            className='form-control'
                                value={inputData}
                                onChange={(event) => setInputData(event.target.value)}
                                />
                                {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>
                                ) : (
                                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                                )};
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                        </div>
                        {/* show the items */}
                        <div className='showItems'>
                                  {items.map((curElem, index) => {
                                      return (
                                
                                    <div className='eachItem'>
                                        <h3>{curElem?.name}</h3>
                                        <div className='todo-btn'>
                                        <i className="far fa-edit add-btn" onClick = {() => editItem(curElem.id)}></i>
                                        <i onClick={()=> deleteItem(curElem?.id)} className="far fa-trash-alt add-btn"></i>
                                            </div>
                                        </div>

                                      )
                                  })
                                
                                }

                           
                            </div>
                        <div className='showItems'><button className='btn effect04' data-sm-link-text="REMOVE ALL"
                        onClick={RemoveAll}>
                            <span>CHECK LIST</span>
                        </button></div>
                </div>
            </div>
        </>
        )
    }
    export default Todo;
