import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import cartContext from '../../../store/cart-context';

const MealItem = (props) => {
   /*
        1st ₹ sign is denote output character dollar sign
        2nd $ sign is denote curly braces to inject dynamic content into the template literal
    */

        //to stablish the connection between the component and the context
   const cartCtx=useContext(cartContext);
  const price = `₹${props.price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;