import React, { createContext, useState} from "react"


export const context = createContext([{title:"uno"}, {title:"dos"}])

const CustomProvider = ({ children }) =>{

    const [cart, SetCart] = useState([])

    const añadir = (producto) =>{
        console.log("empezamos a añadir")
    }
    const borrar = (id) => {
        console.log("borramos")
    }

    const estaEnLista =(id) => {
        console.log("verifica si esta en la lista")
    }

    const reset = ()=>{
        SetCart([])
    }

    return <context.Provider value={{cart, añadir, borrar, reset}} >{children} </context.Provider>
}


export default CustomProvider