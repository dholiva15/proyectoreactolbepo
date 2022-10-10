import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../../Context/CustomContext";


export const CartWidget = () =>{

    const {cart} = useContext(context)
    return(
        <>
        
      <Link to='cart'> 

        <ShoppingCartIcon />
        <span className="cart-count">
            {cart.length}
        </span>

        </Link>
       
        </>
        
    )
}
