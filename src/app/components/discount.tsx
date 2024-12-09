import React from "react";

const Discount: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 lg:flex-row lg:justify-center lg:px-20">
      {/* Left Content */}
      <div className="lg:w-1/2 lg:px-20 text-center items-center lg:text-justify">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-6 hover:text-pink-500">Discount Item</h1>
        
     {/* Subheading Links */}
     <div className="flex flex-row items-center space-x-4 mt-4 text-center">
          <a href="#" className="text-pink-500 underline">Wood Chair</a>
          <a href="#" className="text-black hover:text-pink-500">Plastic Chair</a>
          <a href="#" className="text-black hover:text-pink-500">Sofa Collection</a>
        </div>

        {/* Discount Heading */}
        <h2 className="mt-8 text-2xl font-semibold text-gray-500 hover:text-pink-500">20% discount for all products</h2>
        <h2 className="mt-2 text-lg font-medium text-pink-500">Earns Sofa Compact</h2>

        {/* Description */}
        <p className="mt-2 text-gray-500 hover:text-pink-500">Style Meets Affordability.</p>
        <p className="text-gray-500 hover:text-pink-500">Discover the Art of Smart Living.</p>

        {/* Features List */}
        <ul className="mt-6 hover:text-pink-500">
          <li className="text-gray-500 hover:text-pink-500 mb-2">
            ✓ Material expose like Metals
          </li>
          <li className="text-gray-500 hover:text-pink-500 mb-2">
            ✓ Clear lines and geometric figures
          </li>
          <li className="text-gray-500 hover:text-pink-500 mb-2">
            ✓ Simple neutral Colors
          </li>
          <li className="text-gray-500 hover:text-pink-500 mb-2">
            ✓ Meet Your Comfort Zone
          </li>
          <button className="text-white text-sm rounded border-radius mt-2 pb-2 pt-2 py-6 px-6 bg-pink-500">Shop Now</button>
        </ul>
      </div>

      {/* Right Image */}
      <div className="mt-10 w-5 lg:mt-0 lg:w-1/2 flex flex-row justify-between ">
        <img
          src="/sofa2.png"
          alt="Modern Sofa Furniture"
          className="w-full max-w-[500px] h-[600px] object-cover rounded"
        />
      </div>
    </section>
  );
};

export default Discount;
