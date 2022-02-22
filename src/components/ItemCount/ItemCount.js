import { useState } from 'react'

const ItemCount = ({stock=1, initial=1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity<stock) {       
            setQuantity (quantity+1) 
            }
        } 

    const decrement = () => {
         if (quantity>0) {       
            setQuantity (quantity-1) 
            }
        } 

    return(
        <>
            <h2>Counter {quantity}</h2>
            <button onClick={ () => decrement() } > - </button>
            <button onClick={ () => increment() } > + </button>
            <p />
            <button onClick={ () => onAdd(quantity)}>Agregar al carrito</button>
            <p />
            <p />
        </>
    )
       

}


export default ItemCount