import { useContext } from 'react';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cartContext';

const ProductCard = ({ product }) => {

  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const additem = () => addItemToCart(product)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <button onClick={additem} type="button" className="button btn btn-outline-dark">اضافه به سبد خرید</button>
    </div>
  )
}

export default ProductCard;