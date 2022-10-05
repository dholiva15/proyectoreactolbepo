import React,{ useState, useEffect, useContext } from "react";
import { Item } from "../item/item"
import ItemCount from "../ItemCount/ItemCount";

import { context } from "../../Context/CustomContext"

export const ItemDetail = ({ producto }) => {

  const resultado = useContext (context);
  console.log(resultado)



  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt="" />
      <div style={styles.Infocontainer}>
        <h1>{producto.product}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
        <ItemCount  stock={producto.stock} initial={1} onAdd={()=>{}}/>
      </div>
    </div>
  );
};




const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Infocontainer:{
    display: "flex",
    flexDirection: "column",
  },
  img:{
    maxWidth: "20%"
  }
};