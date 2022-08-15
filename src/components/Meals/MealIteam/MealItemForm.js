import { useRef ,useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onAddMeal(props.meal);
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber > 5) {
      return;
    } 
  };
  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
        id: 'amount_' + props.id, // this changed!
        type: 'number',
        min: '1',
        max: '10',
        step: '1',
        defaultValue: '1',
    }}
/>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;