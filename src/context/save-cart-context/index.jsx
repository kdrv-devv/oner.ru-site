import { data } from "flickity";
import React, { createContext, useReducer } from "react";

const shopAppContext = createContext({})


const ShopContext = ({children}) =>{

  const initialState={
    data:JSON.parse(localStorage.getItem("shop")) || []
  }
  
  const reducer =(state , {type , value})=>{
    switch (type) {
      case "add":
        const newData = {data:[...state.data,value]}
        localStorage.setItem("shop", JSON.stringify(newData.data))      
        return newData 
  
      default:
        break;
        
    }

  }

  const [state , dispatch] = useReducer(reducer , initialState)
    return <shopAppContext.Provider value={ {state , dispatch}}>
              {children}
           </shopAppContext.Provider>

}

export { shopAppContext, ShopContext};
