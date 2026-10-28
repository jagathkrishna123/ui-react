



import { useState, useMemo } from "react";

function UseMemo() {
  const [price, setPrice] = useState(1000);
  const [count, setCount] = useState(0);

  const products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 2000 },
    { name: "Watch", price: 3000 },
    { name: "Bag", price: 800 },
  ];

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter(
      (product) => product.price > price
    );
  }, [price]);

  return (
    <div>
      <h2>Products above ₹{price}</h2>

      {filteredProducts.map((product, index) => (
        <p key={index}>
          {product.name} - ₹{product.price}
        </p>
      ))}

      <button onClick={() => setPrice(price + 500)}>
        price-{price}
      </button>

      <hr />

      <h2>Countllllll: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseMemo;
