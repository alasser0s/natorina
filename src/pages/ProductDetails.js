import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

// This would typically come from an API or database
const products = [
  {
    id: 1,
    name: 'Quinoa Buddha Bowl',
    price: 12.99,
    rating: 4.8,
    reviewCount: 128,
    category: 'bowls',
    calories: '450 kcal',
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    description: 'Nutrient-rich quinoa bowl with roasted vegetables, avocado, and tahini dressing.',
    details: [
      'Organic quinoa base',
      'Fresh seasonal vegetables',
      'House-made tahini dressing',
      'Rich in protein and fiber',
      'Gluten-free',
      'Vegan-friendly',
    ],
    nutritionalInfo: {
      protein: '15g',
      carbs: '45g',
      fat: '22g',
      fiber: '8g',
    },
    reviews: [
      {
        id: 1,
        rating: 5,
        author: 'Sarah M.',
        date: '2 months ago',
        title: 'Perfect healthy lunch!',
        content: 'This bowl is absolutely delicious and keeps me energized throughout the afternoon. The tahini dressing is amazing!',
      },
      {
        id: 2,
        rating: 4,
        author: 'Michael R.',
        date: '1 month ago',
        title: 'Great flavors',
        content: 'Really enjoyed the combination of flavors. Would definitely order again.',
      },
    ],
  },
  // Add more products as needed
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          <Link
            to="/menu"
            className="mt-4 inline-block rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500"
          >
            Return to Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="aspect-h-1 aspect-w-1 w-full">
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">
                  {product.rating} out of 5 stars ({product.reviewCount} reviews)
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-900">{product.description}</p>
            </div>

            {/* Nutritional Information */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Nutritional Information</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Protein</p>
                  <p className="mt-1 text-lg font-medium">{product.nutritionalInfo.protein}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Carbs</p>
                  <p className="mt-1 text-lg font-medium">{product.nutritionalInfo.carbs}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Fat</p>
                  <p className="mt-1 text-lg font-medium">{product.nutritionalInfo.fat}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Fiber</p>
                  <p className="mt-1 text-lg font-medium">{product.nutritionalInfo.fiber}</p>
                </div>
              </div>
            </div>

            {/* Product details */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <ul role="list" className="mt-4 space-y-2">
                {product.details.map((detail) => (
                  <li key={detail} className="text-sm text-gray-500">{detail}</li>
                ))}
              </ul>
            </div>

            {/* Quantity selector and Add to cart */}
            <div className="mt-8">
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-4 text-sm font-medium text-gray-900">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </div>

            {/* Reviews section */}
            <section className="mt-12">
              <h2 className="text-lg font-medium text-gray-900">Recent Reviews</h2>
              <div className="mt-6 space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-t border-gray-200 pt-6">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                              'h-4 w-4 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-3 text-sm text-gray-500">{review.date}</p>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">{review.title}</h3>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>{review.content}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">By {review.author}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 