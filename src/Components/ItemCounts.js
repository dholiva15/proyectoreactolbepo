import React, { useState } from "react";




const ItemCount = ({stock, initial, onAdd }) => {
    
   
const [contador, setContador] = useState(1)

const sumar = ()=>{
    if (contador < stock ){
        setContador(contador + 1)
    }
}


const restar = ()=>{
    if (contador > initial){
        setContador(contador - 1)
    }
}

const agregar = ()=>{
    onAdd(console.log( "la cantidad seleccionada es ", contador))
}


    return(
        
        <>
       <button disabled={contador === stock} onClick={sumar}>+</button>
       <h1> {contador} </h1>

       <button disabled={contador === initial} onClick={restar}>-</button>

       <button onClick={agregar}> agregar</button>

       
        </>
    )
}



export default ItemCount