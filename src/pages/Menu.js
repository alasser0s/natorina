import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'bowls', name: 'Bowls' },
  { id: 'salads', name: 'Salads' },
  { id: 'smoothies', name: 'Smoothies' },
  { id: 'snacks', name: 'Healthy Snacks' },
];

const products = [
  {
    id: 1,
    name: 'Quinoa Buddha Bowl',
    price: 12.99,
    category: 'bowls',
    calories: '450 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Nutrient-rich quinoa bowl with roasted vegetables, avocado, and tahini dressing.',
  },
  {
    id: 2,
    name: 'Green Goddess Salad',
    price: 10.99,
    category: 'salads',
    calories: '320 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Fresh mixed greens with avocado, cucumber, and our signature green goddess dressing.',
  },
  {
    id: 3,
    name: 'Berry Blast Smoothie',
    price: 7.99,
    category: 'smoothies',
    calories: '240 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Antioxidant-rich smoothie with mixed berries, banana, and almond milk.',
  },
  {
    id: 4,
    name: 'Energy Balls',
    price: 5.99,
    category: 'snacks',
    calories: '180 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1604423043492-41b0d7259cc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Raw energy balls made with dates, nuts, and superfoods.',
  },
  {
    id: 5,
    name: 'Mediterranean Bowl',
    price: 13.99,
    category: 'bowls',
    calories: '480 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Falafel bowl with hummus, tabbouleh, and Mediterranean vegetables.',
  },
  {
    id: 6,
    name: 'Acai Bowl',
    price: 11.99,
    category: 'bowls',
    calories: '390 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Refreshing acai bowl topped with granola, fresh fruits, and honey.',
  },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addItem } = useCart();

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Menu</h2>

        {/* Categories */}
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.calories}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 