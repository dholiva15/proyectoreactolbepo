import React, {useContext} from 'react'
import { context } from "../../../Context/CustomContext"
import { Link } from "react-router-dom"
 


export const Cart = () => {
  
  const { cart } = useContext(context)

  if(cart.lenght === 0){
    return (<h1>No agregaste productos , puedes ver <Link to={'/'} > aca </Link> </h1>)
  }


  return (
    
    <>
    {cart.map ((producto)=>{
      return <h1 key={producto.id} >{producto.title} </h1>
    })}
    </>
  )
}

