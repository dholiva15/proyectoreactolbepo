
import {Heading, Button, Text}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { customFetch } from "../assets/utils/customFetch";
import { ItemList } from "./itemList/itemList"
import ItemCount from "./ItemCounts"


const ItemListenerContainer = ({greeting, greeting2, greeting3, greeting4}) => {
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
        <Heading >{greeting}</Heading>
        <ItemCount stock={10} initial={1} onAdd={()=>{}}/>
        <ItemList listProducts={listProducts} />
       
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