import ProductCard from '../components/ProductCard';

const dummyProducts = [
    {
        id: 1,
        nameOfProduct: 'Fauteuil vintage',
        price: 120,
        image:  'https://images.unsplash.com/photo-1579656381229-15bdb188da49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmF1dGV1aWwlMjB2aW50YWdlJTIwbWFycm9ufGVufDB8fDB8fHww'
    },

    {
        id: 2,
        nameOfProduct: 'Table basse en bois',
        price: 90,
        image: 'https://images.unsplash.com/photo-1635975206435-934b1ca3b421?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRhYmxlJTIwYmFzc2UlMjBib2lzfGVufDB8fDB8fHww'
    },

     {
        id: 3,
        nameOfProduct: 'Canapé rose',
        price: 250,
        image: 'https://images.unsplash.com/photo-1660491632743-3ff570ed27ac?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

     {
        id: 4,
        nameOfProduct: 'Table basse en verre',
        price: 180,
        image: 'https://images.unsplash.com/photo-1647967527216-adea2f078e07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGUlMjBiYXNzZXxlbnwwfHwwfHx8MA%3D%3D'
     },

    {
        id: 5,
        nameOfProduct: "Lit Queen Size",
        price: 420,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl0JTIwZG91YmxlfGVufDB8fDB8fHww'
    },

     {
        id: 6,
        nameOfProduct: "Lit King Size",
        price: 450,
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl0JTIwZG91YmxlfGVufDB8fDB8fHww'
    },

     {
        id: 7,
        nameOfProduct: "Canapé vert",
        price: 210,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYXAlQzMlQTklMjB2ZXJ0fGVufDB8fDB8fHww'
    },

    {
        id: 8,
        nameOfProduct: "Chaise haute",
        price: 30,
        image: 'https://images.unsplash.com/photo-1728473185541-a1b3cfd86c0d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXNlJTIwaGF1dGV8ZW58MHx8MHx8fDA%3D'
    },

];

function Home() {
    return (
        <div className="product-list"> 
            {dummyProducts.map((product) => ( // Pour chaque "product" dans ce tableau on va créer un composant product-card
            // .map() est une méthode JS qui va parcourir chaque élément du tableau et appliquer la fonction qu'on lui donne
                <ProductCard key = {product.id} product = {product}/> // key -> un identidiant unique
            ))}
        </div>
    );
}

export default Home;