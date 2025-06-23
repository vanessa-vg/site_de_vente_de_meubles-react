import { useContext } from 'react';
import {CartContext} from '../context/CartContext'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const navigate = useNavigate();

    const handleBuy = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="product-card">
            <img src = {product.image} alt = {product.nameOfProduct}/>
            <h2>{product.nameOfProduct}</h2>
            <p>{product.price} €</p>

            <Link to={`/product/${product.id}`}>
            <button className="infos-btn">Plus d'infos</button>
            </Link>

            <button className="buy-btn" onClick={handleBuy}>Acheter</button>
        </div>
    );
};

export default ProductCard;