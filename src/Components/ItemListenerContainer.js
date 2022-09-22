
import {Heading, Button, Text, Spinner}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { customFetch } from "../assets/utils/customFetch";
import { ItemList } from "./itemList/itemList"
//import ItemCount from "./ItemCount/ItemCount"


const ItemListenerContainer = ({greeting, greeting2, greeting3, greeting4}) => {
    const [listProducts, setListProducts]= useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(
        ()=>{
            customFetch(products)
            .then(res=> {
                setLoading(false)
                setListProducts(res)

            }                
                )
        }, []
    )

    console.log(listProducts)
   
    return(
        
        < div style= {style.container}>
        <Heading >{greeting}</Heading>
        {

            loading ?
            <Spinner />
            :

<ItemList listProducts={listProducts} />
        }
       
      
       
        </div>
    )
}


const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'center',
        color: 'blue',
        alignItems: 'center',
        marginTop:'5%'
    }
}
export default ItemListenerContainer