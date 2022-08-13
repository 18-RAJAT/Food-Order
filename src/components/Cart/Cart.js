import classes from './Cart.module.css';


const Cart = props =>{
    const cartItems=[{id:'c1',name:'Sushi',amount:2,price:12.95}].map(item=><li>{item.name}</li>);
    return(
        <div>
            {cartItems}
            <div></div>
            <div></div>
        </div>
    );
};
export default Cart;