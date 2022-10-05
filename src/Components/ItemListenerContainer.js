
import {Heading, Button, Text, Spinner}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { customFetch } from "../assets/utils/customFetch";
import { ItemList } from "./itemList/itemList"
import { useParams } from 'react-router-dom';
import { selectClasses } from '@mui/material';
//import ItemCount from "./ItemCount/ItemCount"


const ItemListenerContainer = ({greeting, greeting2, greeting3, greeting4}) => {
    const { Id } = useParams();
    
    const [listProducts, setListProducts]= useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(
        ()=>{
            customFetch(products)
            .then(res=> {
                setLoading(false)
                setListProducts(res)
            if(Id){
                const productosFiltrados = products.filter(products=> products.category === Id)
                setListProducts(productosFiltrados)
            } else {
                setListProducts(products)
            }

            }               
                )
        }, []
    )

   
    return(
        
        < div style={style.container}>
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
        
        color: 'blue',
        alignItems: 'center',
        marginTop:'5%'
    }
}
export default ItemListenerContainer