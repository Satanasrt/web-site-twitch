import React from 'react';

const Streamer = ({ name, isLive, imageUrl }) => {
  return (
    <div className="streamer">
      <img
        src={imageUrl}
        alt={name}
        className={`w-60 ${isLive ? 'filter-none' : 'filter grayscale'}`}
      />
      <div className="info mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className={`status ${isLive ? 'text-red-500' : 'text-gray-500'}`}>
          {isLive ? 'Live' : 'Offline'}
        </span>
      </div>
    </div>
  );
};

export default Streamer;
