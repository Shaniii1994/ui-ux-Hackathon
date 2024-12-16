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
        <div className="flex items-center justify-center w-full h-full bg-gray-50 bg-opacity-50 mt-10 mb-10">
          <div className="text-center text-blue-900 px-6 py-6 pt-10 pb-10">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6">Get Leatest Update By Subscribe <br/>
            Our Newslater</h2>

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
    <div className="flex flex-row justify-around mb-10">
        <img src="/brand.png" alt="Brand" className="w-400 h-[80px] mt-[50px] bg-center" />
      </div>
    </div>
  );
};

export default Offers;
