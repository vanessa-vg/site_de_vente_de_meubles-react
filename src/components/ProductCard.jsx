import {Link} from 'react-router-dom';
import BuyButton from './BuyButton';

const ProductCard = ({product}) => {

    return (
        <div className="product-card">
            <img src = {product.image} alt = {product.nameOfProduct}/>
            <h2>{product.nameOfProduct}</h2>
            <p>{product.price} €</p>

            <Link to={`/product/${product.id}`}>
            <button className="infos-btn">Plus d'infos</button>
            </Link>

            <BuyButton product={product} />
        </div>
    );
};

export default ProductCard;