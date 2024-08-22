import React from 'react';

const GameCard = ({ imageUrl, name, viewers, category }) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-2 hover:bg-gray-700 cursor-pointer transition duration-200">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full sm:w-60 md:w-70 h-40 sm:h-60 md:h-80 object-cover rounded-md" 
      />
      <div className="mt-4 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-white">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-400">{viewers} espectadores</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export default GameCard;
