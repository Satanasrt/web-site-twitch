import React from 'react';

const Categoria = ({ name, isNew, imageUrl }) => {
  return (
    <div className="categoria relative">
      <img src={imageUrl} alt={name} className="w-60" />
      {isNew && (
        <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      )}
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
    </div>
  );
};

export default Categoria;
