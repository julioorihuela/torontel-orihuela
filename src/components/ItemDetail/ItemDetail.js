import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
//import './ItemDetail.css'

const ItemDetail = ({product}) => {
    // console.log( product.name ); 

    // return new Promise ((resolve) => {        
    // setTimeout( () => {resolve (        
    //     <div>
    //         <h1>{product.name}</h1>
    //         <img src={product.img} />
    //         <h2>{product.price}</h2>
    //         <button>Agregar</button> 
    //     </div>                    
    //     )}, 2000 )

// agregar el onAdd

    return (
        <div>
            <h2>{product?.name}</h1>
            {/* <img src={product.img} /> */}
            <h2>{product?.price}</h2>
            <button>Agregar</button> 
            <ItemCount />
        </div>
        
    )
}

export default ItemDetail