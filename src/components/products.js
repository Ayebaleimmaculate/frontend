import React from 'react';
import './products.css';

const products = [
  {
    name: 'Chocolate Raspberry Cake',
    image: '/assets/weed.PNG',
    price: '$350',
  },
  {
    name: 'Vintage Lace Cake',
    image: '/assets/wedd.PNG',
    price: '$400',
  },
  {
    name: 'Rustic Naked Cake',
    image: '/assets/wed.PNG',
    price: '$320',
  },
  
  {
    name: 'Birthday Cakes',
    image: '/assets/birthday.PNG',
    price: '$340',
  },
  {
    name: 'Anniversary Cakes',
    image: '/assets/anniversary.PNG',
    price: '$360',
  },
  {
    name: 'Doughnuts',
    image: '/assets/doughnuts.PNG',
    price: '$380',
  },
  {
    name: 'Baby Shower Cakes',
    image: '/assets/baby.PNG',
    price: '$370',
  },
  {
    name: 'Graduation Cakes',
    image: '/assets/graduation.PNG',
    price: '$390',
  },
  {
    name: 'Muffins',
    image: '/assets/muffins.PNG',
    price: '$395',
  },
];

const Products = () => {
  // Extracting the first 4 products for "Our Products"
  const ourProducts = products.slice(0, 3);

  // Extracting the next 6 products for "Other Products"
  const otherProducts = products.slice(3, 10);

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-list">
        {ourProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <h1>Other Products</h1>
      <div className="products-list">
        {otherProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
