import { useContext } from 'react';
import { ReactComponent as Shoppingcart } from '../../assets/114 shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cartContext';


const CartIcon = (props) => {

  const { cartcount } = useContext(CartContext)

  return (
    <div onClick={props.clicky} className='cart-icon-container'>
      <Shoppingcart className='shopping-icon'/>
      <span className='item-count'>{cartcount}</span>
    </div>
  )
}


export default CartIcon;