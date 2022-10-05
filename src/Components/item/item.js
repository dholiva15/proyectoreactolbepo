import React from "react";
import { products } from "../../assets/productos";
import {Image, Heading, Button, Text}  from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import Card from "@mui/material/Card";

import { blue } from "@mui/material/colors";


const Item = ({product})=>{

return(
    
   <Card style= {styles.container}>
   <Text style={styles.titulo}>{product.product}</Text>
   <Text>${product.price}</Text>
   <Image src={product.image} w= "200px"/>
   
   

   <Button>Detalle</Button>

   </Card>
)
}

const styles = {
    container: {
    display: "flex",
    
      width: window.innerHeight > 900 ? "25%" : "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      justifyContent: "space-around",      
      margin: 10,
      backgroundColor: "grey",
    },

    titulo: {
        color: "white",
        fontSize: "25px"
        

    }

    

}

export { Item } 