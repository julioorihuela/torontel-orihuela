import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
//import './ItemDetail.css'

const ItemDetail = ({product}) => {


    return (
        <div>
            <h2>{product?.name}</h2>
            <img src={product?.img} width="80px" alt={product?.name}/>
            <h2>{product?.price}</h2>
            <button>Agregar</button> 
            <ItemCount />
        </div>
        
    )
}

export default ItemDetail