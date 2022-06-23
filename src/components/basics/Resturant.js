import React, { useState } from "react";
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard";

const uniqueList =[
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);
const Resturant = () => {
const [menuData , setmenuData] = useState(Menu);
const [menuList , setMenuList] = useState(uniqueList);

const filterItem = (category) => {

    if (category === "All"){
        setmenuData(Menu);
        return;
        }
    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
   });
    setmenuData(updatedList);
}
    return (
        <>
         <nav className="navbar">
             <div className="btn-group">
                 {
                     menuList.map((curElem) => {
                         return (
                          <button className="btn-group__item" onClick={ () => filterItem(curElem)}>{curElem}</button>
                          )
                     })
                 }
             </div>
         </nav>
        <MenuCard menuData = {menuData}/>

    </>
    );
};

export default Resturant;