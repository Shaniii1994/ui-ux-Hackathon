import React from 'react';

const Offers = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('bg.png')" }}
      >
        {/* Content on top of the background */}
        <div className="flex items-center justify-center w-full h-full bg-gray-50 bg-opacity-50">
          <div className="text-center text-blue-900 px-6">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6">Get Latest Update By Subscribe <br/>
            Our News Later</h2>

            {/* Shop Now Button */}
            <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* White Space for two lines */}
      <div className="my-12"></div>
    
    {/* Brand Image */}
    <div className="flex flex-row justify-around">
        <img src="/Brand.3.png" alt="Brand" className="w-20 max-w-[800px] h-auto" />
      </div>
    </div>
  );
};

export default Offers;