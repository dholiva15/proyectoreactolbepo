import {Heading, Button, Text}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { customFetch } from "../assets/utils/customFetch";
import { ItemList } from "./itemList/itemList"
import ItemCount from "./ItemCounts";
import {ItemDetail, itemDetail} from "../itemDetail/ItemDetail";
import { CircularProgress, getImageListItemBarUtilityClass, typographyClasses } from '@mui/material';


const ItemListenerContainer = () => {
    const [listProducts, setListProducts]= useState([])
    
    useEffect(
        ()=>{
            customFetch(products)
            .then(res=> setListProducts(res))
        }, []
    )

    console.log(listProducts)
   
    return(
        
        <div style= {style.container}>
        
        
        
        <ItemDetail producto={listProducts}/>

        <ItemCount stock={10} initial={1} onAdd={()=>{}}/>
       
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