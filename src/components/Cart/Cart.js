import classes from './Cart.module.css';
import Modal from '../UI/Model';

const Cart = (props) => {
    const cartItems = (
      <ul className={classes['cart-items']}>
        {[{ id: 'c1', name: 'Pizza', amount: 2, price: 120.40 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    );
    return (
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>₹ 250.80</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      );
    };
    
    export default Cart;