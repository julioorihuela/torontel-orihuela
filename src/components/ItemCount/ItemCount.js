import { useState } from 'react'

const ItemCount = ({stock=10, initial=1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        quantity<stock && setQuantity(quantity+1);
        } 

    const decrement = () => {
        quantity>0 && setQuantity(quantity-1);
                } 

    return(
        // <div>
          
        //     <button onClick={ () => decrement() } > - </button>
        //     <h2>{quantity}</h2>
        //     <button onClick={ () => increment() } > + </button>
        //     <p />
        //     <button onClick={ () => onAdd(quantity)}>Agregar al carrito</button>
        //     <p />
            
        // <div />

        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="Option" onClick={()=> decrement() }>  -  </button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><button className="Option" onClick={() => increment() }>  +  </button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><button className="Option" onClick={() => onAdd(quantity)}>Agregar al carrito</button></td>
                    </tr>

                </tbody>
                
            </table>       
        </div>


    )
       

}


export default ItemCount