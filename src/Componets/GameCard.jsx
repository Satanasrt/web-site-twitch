import React from 'react';

const GameCard = ({ imageUrl, name, viewers, category }) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-2 hover:bg-gray-700 cursor-pointer transition duration-200 w-full max-w-xs md:max-w-sm lg:max-w-md">
      <img src={imageUrl} alt={name} className="w-full h-auto object-cover rounded-md" />
      <div className="mt-2 text-center">
        <h3 className="text-sm md:text-lg font-semibold text-white">{name}</h3>
        <p className="text-xs md:text-sm text-gray-400">{viewers} espectadores</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
    </div>
  );
};

export default GameCard;
