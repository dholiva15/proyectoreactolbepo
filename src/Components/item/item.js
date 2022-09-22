import React from "react";
import { products } from "../../assets/productos";
import {Image, Heading, Button, Text}  from '@chakra-ui/react'
import ItemCount from "../ItemCount/ItemCount";


const Item = ({product})=>{
    console.log(product)
return(
    
   <>
   <Text>{product.product}</Text>
   <Text>${product.price}</Text>
   <Image src={product.image} w= "200px"/>
   <Button>Detalle</Button>

   <ItemCount stock={product.stock} initial={1} onAdd={()=>{}}/>
   </>
)
}

export { Item } 