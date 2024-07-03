import React from 'react';
import { useParams } from 'react-router-dom';


const productDetails = [
  {
    id: '1',
    name: 'Classic White Wedding Cake',
    description: 'A timeless white wedding cake with elegant designs, perfect for a classic wedding theme.',
    ingredients: 'Flour, Sugar, Eggs, Butter, Vanilla Extract, Baking Powder, Milk, Salt',
    price: '$300',
    image: '',
  },
  {
    id: '2',
    name: 'Chocolate Raspberry Cake',
    description: 'A rich chocolate cake with layers of raspberry filling and decadent chocolate frosting.',
    ingredients: 'Flour, Sugar, Eggs, Butter, Cocoa Powder, Baking Powder, Milk, Raspberries, Salt',
    price: '$350',
    image: 'classic white wedding cake.jpg',
  },
  {
    id: '3',
    name: 'Vintage Lace Cake',
    description: 'A beautifully crafted cake with intricate lace designs, adding a touch of vintage charm.',
    ingredients: 'Flour, Sugar, Eggs, Butter, Vanilla Extract, Baking Powder, Milk, Salt, Fondant',
    price: '$400',
    image: 'Vintage Lace Cake.jpg',
  },
  {
    id: '4',
    name: 'Rustic Naked Cake',
    description: 'A rustic naked cake with minimal frosting, showcasing the cake layers and natural textures.',
    ingredients: 'Flour, Sugar, Eggs, Butter, Baking Powder, Milk, Vanilla Extract, Salt',
    price: '$320',
    image: 'Rustic Naked Cake.jpg',
  },
  {
    id: '5',
    name: 'Floral Buttercream Cake',
    description: 'A gorgeous buttercream cake adorned with fresh flowers, perfect for a garden wedding.',
    ingredients: 'Flour, Sugar, Eggs, Butter, Baking Powder, Milk, Vanilla Extract, Salt, Edible Flowers',
    price: '$375',
    image: 'Floral Buttercream Cake.jpg',
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productDetails.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Ingredients:</strong> {product.ingredients}</p>
      <p><strong>Price:</strong> {product.price}</p>
    </div>
  );
};

export default ProductDetails;
