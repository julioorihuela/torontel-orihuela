import ItemDetail from '../ItemDetail/ItemDetail';
import './Item.css';

const Item = ({product}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', margin: '10px'}}>            <img src={product.img} width="150px" alt={product.name}/>  
        <h2>{product.name}</h2>
        <h3>Stock: {product.stock}</h3>
        <h3>Precio: {product.price}</h3>

        <button onClick={() => ItemDetail}>Ver Detalle</button>
        </div>
    );
};

export default Item