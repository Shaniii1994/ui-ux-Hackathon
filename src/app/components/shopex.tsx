import React from "react";

const ShopexOffer: React.FC = () => {
  const offers = [
    { id: 1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer1.png" },
    { id: 2, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer2.png" },
    { id: 3, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer3.png" },
    { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer4.png" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-5">What Shopex Offer!</h2>
      <div className="sm:grid-cols-2 lg:grid-cols-4 gap-6 relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300 grid grid-cols-4">
        {offers.map((offer) => (
          <div key={offer.id} className="text-center p-4">
            <img src={offer.image} alt={offer.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;

