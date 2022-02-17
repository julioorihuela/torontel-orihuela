import './CartWidget.css'
import ItemCount from '../ItemCount/ItemCount';

const CartWidget = () => {
    
    return(
        <button className="CartWidget">
            <img width="20" src="/images/cartt.svg" alt='cartt' className='CartImg'/>
            {ItemCount.quantity}0
        </button>
    );
}

export default CartWidget