import React, {useContext} from 'react'
import { context } from "../../../Context/CustomContext"
import { Link } from "react-router-dom"
import './Cart.css'
import { Button } from '@mui/material';
import { db } from '../../../firebase/firebase';
import { collection , addDoc, serverTimestamp } from "firebase/firestore"

 


export const Cart = ( {condicion}) => {
  
  const { cart, borrar } = useContext(context)

  const datosComprador ={

    nombre: "Jose",
    apellido: "Perez",
    email: "joseperez@gmail.com"
  }

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db, "ventas")
    addDoc(ventasCollection, {
      comprador: datosComprador,
      items: cart,
      date: serverTimestamp(),
      

    })
    .then(result=>{

      console.log(result.id);
      borrar();

    } )
  }

  

  return (
    
    <>

{cart.length === 0 ? (
      <h1 className={condicion ? "rojo" : "verde"} >
        No agregaste productos, puedes volver <Link to={"/"} className='letra'> al home </Link>

      </h1>
    ): (
      <> 
      {cart.map(({item})=> 
      <> 
      <h1 key={item.id}> {item.product}</h1>
      <Button onClick={()=>borrar(item)}> Quitar </Button>
      <Button onClick={borrar}>Vaciar Carrito </Button>
      <Button onClick={finalizarCompra}>finalizar Compra</Button>


      </>
      )}
      </>
    )

    }


    </>
  )
}

