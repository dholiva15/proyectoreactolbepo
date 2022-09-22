import {Heading, Button, Text}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../../assets/productos";
import { customFetch } from "../../assets/utils/customFetch";
import { ItemList } from "../itemList/itemList";

import {ItemDetail} from "../itemDetail/ItemDetail";
import { CircularProgress, getImageListItemBarUtilityClass, typographyClasses } from '@mui/material';


const ItemDetailContainer = () => {
    
    
    const [producto, setProducto]= useState([])
    
    useEffect(
        ()=>{
            customFetch(products)
            .then(res=> setProducto(res))
        }, []
    )

    
   
    return(
        
        <div style= {style.container}>
        
        
        
        <ItemDetail producto={producto}/>

       
        </div>
    )
}


const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'center',
        color: 'green',
        alignItems: 'center',
        marginTop:'5%'
    }
}
export default ItemListenerContainer