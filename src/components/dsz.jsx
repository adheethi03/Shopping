import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        <h3 style={{ fontSize: '16px' }}>{product.title}</h3>
                        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
