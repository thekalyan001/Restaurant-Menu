import React, { useState } from "react"
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

//new set so that duplicate na ho, see the consoe.log wala
const uniqueList=[
    ... new Set(Menu.map((currEle)=>{
    return currEle.category;
})
),
"All"
];

//console.log(uniqueList)


const Resturant = () => { 
    //react hooks, UseStateHooks https://reactjs.org/docs/hooks-reference.html#usestate
    const[menuData, setMenuData]=useState(Menu)
    //see the error me output- console.log(menuData)
    const[menuList, setMenuList]= useState(uniqueList)

    const filterItem=(category)=>{

        if(category==="All"){  //All wale button ke liye set kr do sabhi menu data
            setMenuData(Menu);
            return;
        }

         const updatedLIst= Menu.filter((curEle)=>{
             return curEle.category === category;
         });

         setMenuData(updatedLIst);
    };

    return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/> 
        <MenuCard HereMenuData={menuData}/>
    </>
    
    );
};

export default Resturant;