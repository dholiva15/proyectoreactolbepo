import React from "react";
import { products } from "../../assets/productos";
import {Heading, Button, Text}  from '@chakra-ui/react'


const Item = ({product})=>{
    console.log(product)
return(
    
   <>
   <Text>{product.product}</Text>
   <Text>{product.price}</Text>
   <Text>{product.image}</Text>
   <Button>Detalle</Button>
   </>
)
}

export { Item } 