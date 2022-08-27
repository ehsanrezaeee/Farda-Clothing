import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";



const CartDropDown = () => {
  const navigator = useNavigate();
  const checkoutHandler = () => {navigator('/checkout')}

  const {cartItems} = useContext(CartContext)
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem 
        key={item.id}
        id={item.id} 
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        imageUrl={item.imageUrl}
        />)}
      </div>
      <button onClick={checkoutHandler} type="button" className="btn btn-light">نهایی کردن خرید</button>
    </div>
  )
}

export default CartDropDown;