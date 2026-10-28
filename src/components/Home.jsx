import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Our Products
        </h1>

        <p className="mb-8 text-gray-500">
          Discover our latest products at great prices.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            const discount = Math.round(
              ((product.price - product.offerPrice) / product.price) * 100
            );

            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-56 w-full object-cover"
                  />

                  <span className="absolute left-3 top-3 rounded-md bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                    {discount}% OFF
                  </span>
                </div>

                <div className="p-4">
                  <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                    {product.category}
                  </p>

                  <h2 className="mb-3 text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>

                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.offerPrice.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-medium text-blue-600">
                    View Details →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;