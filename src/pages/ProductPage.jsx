import {useParams} from 'react-router-dom';
import { useState } from 'react';
import BuyButton from '../components/BuyButton';
import BackButton from '../components/BackButton';

const dummyProducts = [
  {
    id: 1,
    nameOfProduct: 'Fauteuil vintage',
    price: 120,
    image: 'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 2,
    nameOfProduct: 'Table basse en bois',
    price: 120,
    image: 'https://images.unsplash.com/photo-1635975206435-934b1ca3b421?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRhYmxlJTIwYmFzc2UlMjBib2lzfGVufDB8fDB8fHww',
    description: 'Une table basse avec un véritable charme rustique.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 3,
    nameOfProduct: 'Canapé rose',
    price: 120,
    image: 'https://images.unsplash.com/photo-1660491632743-3ff570ed27ac?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 4,
    nameOfProduct: 'Table basse en verre',
    price: 120,
    image: 'https://images.unsplash.com/photo-1647967527216-adea2f078e07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGUlMjBiYXNzZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 5,
    nameOfProduct: 'Lit Queen Size',
    price: 120,
    image:  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl0JTIwZG91YmxlfGVufDB8fDB8fHww',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 6,
    nameOfProduct: 'Lit King Size',
    price: 120,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl0JTIwZG91YmxlfGVufDB8fDB8fHww',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 7,
    nameOfProduct: 'Canapé vert',
    price: 120,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYXAlQzMlQTklMjB2ZXJ0fGVufDB8fDB8fHww',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },

  {
    id: 8,
    nameOfProduct: 'Chaise haute',
    price: 120,
    image: 'https://images.unsplash.com/photo-1728473185541-a1b3cfd86c0d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXNlJTIwaGF1dGV8ZW58MHx8MHx8fDA%3D',
    description: 'Un fauteuil des années 60 restauré avec amour.',
    gallery: [
      'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1587221836146-e8f8600b27f5?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1605822591786-6fd259a868d5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  // ... autres produits
];

const ProductPage = () => {
  const { id } = useParams(); // récupère l’id de l’URL

  const product = dummyProducts.find(p => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product.image);

  if (!product) return <p>Produit introuvable</p>;

  return (
    <div className="product-content">
        <BackButton />
        <div className="product-left">
          <img className="product-image" src={mainImage} alt={product.nameOfProduct} />

          <div className="product-gallery">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniature ${index + 1}`}
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

    <div className="product-details">
      <h2>{product.nameOfProduct}</h2>
      <p><strong>Prix :</strong> {product.price} €</p>
      <p><strong>Description :</strong> {product.description}</p>
      <p><strong>Matière :</strong> {product.material}</p>
      <p><strong>Dimensions :</strong> {product.dimensions}</p>
      <p><strong>Couleur :</strong> {product.color}</p>
      <p><strong>État :</strong> {product.condition}</p>
      <BuyButton product={product}/>
    </div>
  </div>
  );
};

export default ProductPage;