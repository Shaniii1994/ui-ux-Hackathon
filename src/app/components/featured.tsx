import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/3.png", 
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/4.png",
      background: "blue",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/5.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/6.png",
    },
  ];

  return (
    <section className=" py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 hover:text-pink-500 mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-gray-50 shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "300px" }} // Optional height for consistent card size
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-pink-500">
                  {product.name}
                </h3>
                <p className="text-sm text-blue-900">{product.code}</p>
                <p className="text-lg font-bold text-blue-900 mt-2">
                  {product.price}
                </p>
              </div>
             
              <div className="absolute inset-0 bg-green-500 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-white font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;