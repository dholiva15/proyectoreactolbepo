import React,{ useState, useEffect, useContext } from "react";
import { Item } from "../item/item"
import ItemCount from "../ItemCount/ItemCount";

import { context } from "../../Context/CustomContext"
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

export const ItemDetail = ({ producto }) => {

  const resultado = useContext (context);

  const { cart,addItem } = useContext(context);

  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const onAdd= (contador) =>{
    addItem(producto, contador)
    setIsButtonPressed(true)
    addItem(contador)
  }
  



  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt="" />
      <div style={styles.Infocontainer}>
        <h1>{producto.product}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
        {
          !isButtonPressed? (

            <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd}/>

          ): (<Link to="/cart">
            <button>Finalizar</button>
          </Link>)
        }
        
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