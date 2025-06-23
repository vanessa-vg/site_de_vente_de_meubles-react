import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Cart = () => {
    const {cart} = useContext(CartContext);

const navigate = useNavigate();

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
          <button className="checkout-btn">Valider le panier</button>
        </>
      )}
    </div>
    );
};

export default Cart;