import './cart-item.styles.scss';


const CartItem = (props) => {
  return (
    <div className='cart-item-container'>
      <img src={props.imageUrl} alt={`${props.name}`}/>
      <div className='item-details'>
        <span className='name'>{props.name}</span>
        <span className='price'>{props.quantity} x تومان {props.price}</span>
      </div>
    </div>
  )
};


export default CartItem;