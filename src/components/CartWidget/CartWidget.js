import './CartWidget.css'

const CartWidget = () => {
    return(
        <button className="CartWidget">
            <img width="20" src="/images/cartt.svg" alt='cartt' className='CartImg'/>
            0
        </button>
    );
}

export default CartWidget