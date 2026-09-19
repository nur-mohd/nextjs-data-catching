import React from 'react';
import ProductCard from '../components/ProductCard';

//SSG - Static Site Generation
const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products", {cache: "force-cache"});
    return res.json();
}

const ProductsPage = async() => {

    const proudcts = await getProducts();

    return (
        <div>
            <h2>Products Page: {proudcts.length}</h2>

            <div className='grid grid-cols-3 gap-4'>
                {proudcts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>

        
    );
};

export default ProductsPage;