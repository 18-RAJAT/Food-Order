import {useContext} from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Model';
import cartContext from '../../context/cartContext';

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.cartItems.length > 0;

    const cartItems = (
      <ul className={classes['cart-items']}>
        {/* {[{ id: 'c1', name: 'Pizza', amount: 2, price: 120.40 }].map((item)  */}
        {cartCtx.items.map((item)=> (
          <li>{item.name}</li>
        ))}
      </ul>
    );
   
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    );
  };
  
  export default Cart;