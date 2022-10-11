import React, { createContext, useState} from "react"


export const context = createContext([])

const CustomProvider = ({ children }) =>{

    const [cart, SetCart] = useState([])

    const addItem = (item, quantity) =>{
        const existItem = cart.indexOf(itemCart =>itemCart.item.id == item.id)
        if (existItem !==-1){
            const newCart = cart.filter(item => item !== cart[existItem])
            SetCart([{ item, quantity}, ...newCart])
        }else{

            SetCart([...cart, { item, quantity}])

        }
        

       
    }

    const borrar = (item) => {
        const newCart = cart.filter(oldItem => {
            console.log(oldItem);

            return oldItem.item !== item })

            
            SetCart([...newCart])
    }

    const estaEnLista =(id) => {
        console.log("verifica si esta en la lista")
    }

    const clear = ()=>{
        SetCart([])
    }

    return <context.Provider value={{cart, addItem, borrar, clear}} >{children} </context.Provider>
}


export default CustomProvider