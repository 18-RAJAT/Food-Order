import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealIteam/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Taco Bell Nacho Fries',
    description: ' Best-selling new product launch.',
    price: 149.50,
  },
  {
    id: 'm2',
    name: 'Potbelly A Wreck Sandwich',
    description: 'Potbelly signature sandwich, A Wreck, is also its most popular one.',
    price: 189.75,
  },
  {
    id: 'm3',
    name: 'Tim Hortons Double Double',
    description: 'Tim Horton fills a similar space to Dunkin, serving coffee, baked goods, and a range of sandwiches and snacks.',
    price: 120.00,
  },
  {
    id: 'm4',
    name: 'Burger King Whopper Sandwich',
    description: 'More than 11 million customers walk through Burger King doors each day, many of them in pursuit of the famous burger.',
    price: 99.25,
  },
];

const AvailableMeals = () => {
  // const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;