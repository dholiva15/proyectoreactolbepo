import React, {useContext} from 'react'
import { context } from "../../../Context/CustomContext"
import { Link } from "react-router-dom"
 


export const Cart = () => {
  
  const { cart } = useContext(context)

  

  return (
    
    <>

    {cart.length === 0 ? (
      <h1>
        No agregaste productos, puedes volver <Link to={"/"}> Home </Link>

      </h1>
    ): (
      <> 
      {cart.map((producto)=>{
        return <h1 key={producto.id}> {producto.title}</h1>
      })}
      </>
    )

    }

    </>
  )
}

