
import './Checkout.styles.scss';
import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';
import CheckoutItem from './checkoutItem';

const Checkout = () => {
  
  const { cartItems, cartTotal } = useContext(CartContext)



  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>کالا</span>
        </div>
        <div className='header-block'>
          <span>توضیحات</span>
        </div>
        <div className='header-block'>
          <span>تعداد</span>
        </div>
        <div className='header-block'>
         <span>قیمت</span>
        </div>
        <div className='header-block'>
         <span>حذف</span>
        </div>

      </div>
        {cartItems.map(item => <CheckoutItem 
        key={item.id}
        cartItem = {item}
        />)}
        <span className='total'>کل هزینه: {cartTotal} هزارتومان  </span>
    </div>
  )
}


export default Checkout;