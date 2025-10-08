import React, { useState, useEffect } from 'react';
import './Home.css'

const dummyProducts = [
  {
    id: 1,
    name: 'Henry 2 Seater Sofa ',
    price: 29.99,
    image: 'https://hogfurniture.co/cdn/shop/articles/Home_collection.png?v=1657288179',
  },
  {
    id: 2,
    name: 'dining table furniture ',
    price: 49.99,
    image: 'https://thetimberguy.com/cdn/shop/products/Buy-Compact-Wooden-Dining-table-with-1-Bench-3-chairs-furniture-set-for-modern-Home_1200x.jpg?v=1637950097',
  },
  {
    id: 3,
    name: 'Adoree Lounge Chair ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/lounge-chairs/Adoree-lounge-arm-chair-wanlut-finish/newwww/rose-vineyarrd/new-logo/1-750x650.jpg',
  },
  {
    id: 4,
    name: 'Wood Bed with Full Drawer Storage',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/bed-with-storage/walken-bed-with-storage/updated/NEW-+HONEY/1-750x650.jpg',
  },
  {
    id: 5,
    name: 'Alkin Study Table ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/study-table/alkin-study-table/revised/walnut/updated/new-logo/1-750x650.jpg',
  },
  {
    id: 6,
    name: 'Ash Wood TV Unit with Fluted Glass Panel Door ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/Flatter-TVunit/HoneyFinish-Shoot/New-Look/5-750x650.jpg',
  },
  {
    id: 7,
    name: 'Aurora Wooden Rocking Chair with Cushion',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/rocking-chairs/aurora-teak-rocking-chair-with-cushion/updated/1-750x650.jpg',
  },
  {
    id: 8,
    name: 'Cagney Sheesham Wood Ladder Book Shelf ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/book-shelves/cagney-bookshelf-revised/honey/updated/new-imgaes/11-750x650.jpg',
  },
  {
    id: 9,
    name: '2 Door Wooden Wardrobe with Mirror',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/wardrobe/cambrey-double-door-wardrobe-with-mirror/revised/honey/updated/new-logo/1-750x650.jpg',
  },
  {
    id: 10,
    name: 'Cambrey Rectangle Mirror With Frame ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/home-decors/wall-decors/mirrors/cambrey-rectangle-mirror-with-frame/walnut-finish/updated/1-750x650.jpg',
  },
   {
    id: 11,
    name: 'Cosmic Handcrafted Art Wall Clock (Large) ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/Fankaarlok/CSMVYG-18/1-750x650.jpg',
  },
  {
    id: 12,
    name: ' Wood Home Temple With Two Door & Drawer ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/Yaj-HomeTemple/16-750x650.jpg',
  },
  {
    id: 13,
    name: ' Living Room - Blossom Hive Glass Vase  ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/China+Lights/Plant/WSARTIFICIAL-76799/Looks/1-750x650.jpg',
  },
  {
    id: 14,
    name: 'Cuevas Bathroom Cabinet (Walnut Finish) ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/bathroom-cabinets/cuevas-bathroom-cabinet-revised/walnut/updated/new-logo/1-750x650.jpg',
  },
  {
    id: 15,
    name: 'Cambrey Rectangle Mirror With Frame ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/home-decors/jainsons+Lights/astounding-antique-brass-aluminium-wall-lights-without-bulb/1-750x650.jpg',
  },
  {
    id: 16,
    name: 'Heart shaped LED Lighting with Rose Tinted Mirror ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/home-decors/lamps-lighting/decorative-lights/heart-shaped-led-lighting-with-rose-tinted-mirror/updated/1-810x702.jpg',
  },
  {
    id: 17,
    name: 'Albus L-Shape 4 Seater Sofa (Cotton, Jade Ivory ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/fabric-sofa/oasis-l-shape-sectional-fabric-sofa-cotton-jade-ivory/new-logo/NEW+3D+IMG/New+Looks+/6-750x650.jpg',
  },
  {
    id: 18,
    name: 'Aroha 2 Seater Outdoor Set with Coffee Table ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/Aroha+outdoor+set/set+of+2+chairs+nd+table/105-750x650.jpg',
  },
  {
    id: 19,
    name: 'Double Round Ceiling Lamp  Lighting ',
    price: 19.99,
    image: 'https://ii1.pepperfry.com/media/catalog/product/d/o/494x544/double-round-ceiling-lamp-double-round-ceiling-lamp-qckozw.jpg',
  },
  {
    id: 20,
    name: 'Cambrey Rectangle Mirror With Frame ',
    price: 19.99,
    image: 'https://ii1.pepperfry.com/media/catalog/product/e/b/494x544/eberau-mango-wood-swing-in-tubbaq-finish-eberau-mango-wood-swing-in-tubbaq-finish-nrndbr.jpg',
  },
  {
    id: 21,
    name: 'Cambrey Rectangle Mirror With Frame ',
    price: 19.99,
    image: 'https://d2emch4msrhe87.cloudfront.net/image/cache/data/home-decors/jainsons+Lights/astounding-antique-brass-aluminium-wall-lights-without-bulb/1-750x650.jpg',
  },

  // You can add more products here if needed
];

const CART_STORAGE_KEY = 'myCart';

const ProductPage = () => {
  const [cart, setCart] = useState(() => {
    // Load initial cart from localStorage or fallback to empty array
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart changes to localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Add to cart with alert
const addToCart = (product) => {
  const itemExists = cart.find((item) => item.id === product.id);

  if (itemExists) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    alert(`${product.name} quantity increased by 1!`);
  } else {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    alert(`${product.name} added to cart!`);
  }
};


  // Increase quantity
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Reduce quantity
  const reduceQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container py-5 bg" >
      <h1 className="mb-4">Products</h1>
      <div className="row g-4">
        {dummyProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '300px' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-success mb-2">Price: ${product.price.toFixed(2)}</p>
                  <p>★★★★☆</p>
                </div>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{item.name}</strong> × {item.quantity} = $
                {(item.quantity * item.price).toFixed(2)}
              </div>
              <div>
                <button
                  className="btn btn-outline-success btn-sm me-2"
                  onClick={() => increaseQuantity(item.id)}
                  title="Increase quantity by 1"
                >
                  +
                </button>
                <button
                  className="btn btn-outline-warning btn-sm me-2"
                  onClick={() => reduceQuantity(item.id)}
                  title="Reduce quantity by 1"
                >
                  -
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove from cart"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductPage;
