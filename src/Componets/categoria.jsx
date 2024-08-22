import React from 'react';

const Categoria = ({ name, isNew, imageUrl }) => {
  return (
    <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
      <img src={imageUrl} alt={name} className="w-full h-auto object-cover rounded-md" />
      {isNew && (
        <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      )}
      <h3 className="mt-2 text-lg font-semibold text-center">{name}</h3>
    </div>
  );
};

export default Categoria;
