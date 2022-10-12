
import {Heading, Button, Text, Spinner}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../assets/productos";
import { customFetch } from "../assets/utils/customFetch";
import { ItemList } from "./itemList/itemList"
import { useParams } from 'react-router-dom';
import { selectClasses } from '@mui/material';
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where} from "firebase/firestore"

//import ItemCount from "./ItemCount/ItemCount"


const ItemListenerContainer = ({greeting, greeting2, greeting3, greeting4}) => {
   
    
    const [listProducts, setListProducts]= useState([])
    const { Id } = useParams();
    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(
        ()=>{
            
            const productCollection = collection(db, 'products');
            const q = query(productCollection, where("category", "==", `${Id}`))
            let url = (Id === undefined ? productCollection : q)
            
            getDocs(url)
            .then((data)=>{const lista = data.docs.map((product)=>{
                return{...product.data,
                id:product.id}
                
            }); setListProducts(lista)
        
        })
        .catch(()=>{setError(true)})
        .finally(()=>{
            setLoading(false)
        })



        }, 
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