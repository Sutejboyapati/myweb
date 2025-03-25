import React from "react";

const AnimatedCard = ({ title, description, children }) => {
  return (
    <div className="w-80 h-80 bg-white shadow-md overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col justify-between p-6">
      <div className="flex flex-col items-center flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          {title}
        </h2>
        <p className="text-gray-600 text-center flex-grow">
          {description}
        </p>
      </div>
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
