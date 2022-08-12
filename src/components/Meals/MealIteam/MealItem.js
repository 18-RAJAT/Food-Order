import classes from './MealItem.module.css';

const MealItem = (props) => {
    //1st $ sign is denote output character dollar sign
    //2nd $ sign is denote curly braces to inject dynamic content into the template literal
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;