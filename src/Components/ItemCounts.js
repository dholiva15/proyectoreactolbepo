import React, { useState, useEffect} from "react";




const ItemCount = ({stock, initial, onAdd }) => {
    
   
const [contador, setContador] = useState(1)
const [numero, setNumero]= useState(0);

useEffect (
    ()=>{
        setNumero(numero+1);
        const intervalo = setInterval(() => {
            console.log("ping")
            
        }, 1000)

        return(()=>{
            clearInterval(intervalo)
        })
    }, [contador]
)

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