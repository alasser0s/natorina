import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';

const featuredProducts = [
  {
    id: 1,
    name: 'Quinoa Buddha Bowl',
    price: '$12.99',
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Healthy Buddha bowl with quinoa, avocado, and vegetables.',
  },
  {
    id: 2,
    name: 'Green Smoothie Bowl',
    price: '$9.99',
    imageSrc: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Fresh green smoothie bowl with fruits and granola.',
  },
  {
    id: 3,
    name: 'Avocado Toast',
    price: '$8.99',
    imageSrc: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Freshly made avocado toast with microgreens.',
  },
];

const testimonials = [
  {
    id: 1,
    quote: "The food quality is exceptional, and I love how they prioritize health without compromising on taste.",
    author: "Sarah Johnson",
    role: "Fitness Enthusiast",
    rating: 5,
  },
  {
    id: 2,
    quote: "Natorina has become my go-to place for healthy meals. Their menu variety is impressive!",
    author: "Michael Chen",
    role: "Health Coach",
    rating: 5,
  },
  {
    id: 3,
    quote: "The service is fantastic, and the food is always fresh and delicious.",
    author: "Emma Davis",
    role: "Yoga Instructor",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-secondary-50">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="animate-slide-down text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
                  Preservative Free,
                  <br />
                  <span className="text-primary-500">Homemade Products</span>
                </h1>
                <p className="mt-6 animate-fade-in text-lg leading-8 text-secondary-600">
                  Discover delicious and nutritious meals that will nourish your body and delight your taste buds. Made with fresh, organic ingredients.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/menu"
                    className="animate-scale-up rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-600 hover:shadow-xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    View Menu
                  </Link>
                  <Link 
                    to="/contact" 
                    className="animate-scale-up text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-500 transition-colors duration-300"
                  >
                    Contact Us <span aria-hidden="true" className="animate-bounce-subtle inline-block">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary-100 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full animate-fade-in"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            alt="Healthy food spread"
          />
        </div>
      </div>

      {/* Featured products section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="animate-slide-up text-2xl font-bold text-secondary-900">Featured Products</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`group relative animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 transition-all duration-300 shadow-md group-hover:shadow-xl sm:h-64">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-6 text-sm text-secondary-600">
                  <Link to={`/product/${product.id}`}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-primary-500">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-secondary-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="animate-slide-up text-lg font-semibold leading-8 tracking-tight text-primary-500">Testimonials</h2>
            <p className="animate-slide-up mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`pt-8 sm:inline-block sm:w-full sm:px-4 animate-fade-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex gap-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-primary-400 animate-scale-up" style={{ animationDelay: `${i * 100}ms` }} aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mt-6 text-secondary-900">
                      <p>{testimonial.quote}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                        <div className="text-secondary-600">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 