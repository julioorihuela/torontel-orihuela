//import {Link} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './Item.css';
//import ItemCount from '../ItemCount/ItemCount';

const Item = ({product}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', margin: '10px'}}>    
            <div className="CardItem">
                <img src={product.img} width="60px" alt={product.name}/>  
                <h2>{product.name}</h2>
                <p>Stock: {product.stock}</p>
                <p>Precio: {product.price} US$</p>
                {/* <ItemCount />  */}
                <button onClick={() => ItemDetail}>Ver Detalle</button>
                {/* <Link to = {`/detail/${product.id}`}>Ver Detalle</Link>  */}
            </div>        
        </div>
    );
};

export default Item