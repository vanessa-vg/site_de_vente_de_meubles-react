import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const BuyButton = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleBuy = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <button className='buy-btn' onClick={handleBuy}>Acheter</button>
    );
};

export default BuyButton;