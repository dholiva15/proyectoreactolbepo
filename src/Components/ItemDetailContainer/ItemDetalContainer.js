import {Heading, Button, Text}  from '@chakra-ui/react'
import React,  { useState, useEffect } from "react";
import { products } from "../../assets/productos";
import { customFetch } from "../../assets/utils/customFetch";
import { ItemList } from "../itemList/itemList";

import {ItemDetail} from "../itemDetail/ItemDetail";
import { CircularProgress, getImageListItemBarUtilityClass, typographyClasses } from '@mui/material';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase"
import { doc ,getDoc, collection} from "firebase/firestore"

const ItemDetailContainer = () => {
    
    
    const [producto, setProducto]= useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
    
    useEffect (()=>{

        const productCollection= collection(db, 'products');
        const refDoc = doc(productCollection, id)
        getDoc(refDoc)
        .then((result)=>{
            setProducto(
                {
                    id:result.id,
                    ...result.data(),
                }
            )
        })
        .catch(()=>{setError(true);})
        .finally(()=>{setLoading(false)})

    }

        

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
        flexDirection: 'row',

        justifyContent: 'center',
        color: 'green',
        alignItems: 'center',
        marginTop:'5%'
    }
}
export default ItemDetailContainer