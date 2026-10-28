import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold">
          Product Not Found
        </h1>

        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const discount = Math.round(
    ((product.price - product.offerPrice) / product.price) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm text-blue-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-full rounded-xl object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
              {product.category}
            </p>

            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{product.offerPrice.toLocaleString("en-IN")}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {discount}% OFF
              </span>
            </div>

            <p className="mb-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="mb-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Product Features
              </h2>

              <ul className="space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-6 text-sm">
              Availability:{" "}
              <span
                className={
                  product.stock > 0
                    ? "font-semibold text-green-600"
                    : "font-semibold text-red-600"
                }
              >
                {product.stock > 0
                  ? `In Stock (${product.stock} available)`
                  : "Out of Stock"}
              </span>
            </p>

            <button
              disabled={product.stock === 0}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 sm:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;