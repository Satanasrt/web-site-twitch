import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games }) => {
  return (
    <div className="bg-zinc-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {games.map((game, index) => (
        <GameCard
          key={index}
          imageUrl={game.imageUrl}
          name={game.name}
          viewers={game.viewers}
          category={game.category}
        />
      ))}
    </div>
  );
};

export default GameList