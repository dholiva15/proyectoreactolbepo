import React, {useContext} from 'react'
import { context } from "../../../Context/CustomContext"
import { Link } from "react-router-dom"
import './Cart.css'
import { Button } from '@mui/material'

 


export const Cart = ( {condicion}) => {
  
  const { cart, borrar } = useContext(context)

  

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

      </>
      )}
      </>
    )

    }


    </>
  )
}

