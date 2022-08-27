import { useContext } from 'react';
import './CheckoutItem.styles.scss';
import { CartContext } from '../../contexts/cartContext';



const CheckoutItem = ({ cartItem }) => {

  const { name, price, imageUrl, quantity} = cartItem;
  const { addItemToCart, removeItemFromCart, totalRemoval } = useContext(CartContext);
  const additem = () => addItemToCart(cartItem)
  const removeitem = () => removeItemFromCart(cartItem)
  const removeT = () => totalRemoval(cartItem)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}/>
      </div>

        <span className='name'>{name}</span>
        <span className='quantity'>
          <div onClick={removeitem} className='arrow'>
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div onClick={additem} className='arrow'>
            &#10095;
          </div>
        </span>
        <span className='price'>{price}</span>
      <div onClick={removeT} className='remove-button'>
        &#10005;
      </div>
      
    </div>
  )
};


export default CheckoutItem;