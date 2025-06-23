import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import BackButton from '../components/BackButton';

const Cart = () => {
    const {cart, clearCart} = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
     <div className="cart-page">
     <BackButton />
      <h1>Votre panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, i) => (
              <li key={i}>
                <span>{item.nameOfProduct}</span>
                <span>{item.price} €</span>
              </li>
            ))}
          </ul>
          <p className='total'><strong>Total : </strong>{total} €</p>
          <div className="cart-buttons">
          <button className="checkout-btn">Valider le panier</button>
          <button className='clear-btn' onClick={clearCart}>Vider le panier</button>
          </div>
        </>
      )}
      </div>
    );
};
console.log('Contenu du panier', Cart);
export default Cart;