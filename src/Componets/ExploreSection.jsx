import React from 'react';

const categories = [
  { name: 'Juegos', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg' },
  { name: 'IRL', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg' },
  { name: 'Música y DJ', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg' },
  { name: 'Creative', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg' },
  { name: 'Esports', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg' },
];

const ExploreSection = () => {
  return (
    <div className="bg-zinc-900 text-white p-6">
      {/* Contenedor de publicidad */}
      <div className=" text-white p-6 rounded-md mx-auto w-3/4 max-w-5xl mb-6 flex justify-center">
        <img 
          src="https://images-na.ssl-images-amazon.com/images/G/01/dacx/AdForge/TC-2024-lower-th-f53b51eb-c428-4d84-a0b2-0467a1fe0c19._CBnull_.jpg"
          alt="Anuncio"
          className="w-full h-auto rounded-md" 
        />
      </div>

      {/* Sección Explorar */}
      <h1 className="text-6xl font-bold mb-6">Explorar</h1>
      <div className="flex space-x-10 overflow-x-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-violet-700 hover:bg-purple-700 px-4 py-1 rounded-lg cursor-pointer w-64"
          >
            <img src={category.icon} alt={`${category.name} icon`} className="w-12 h-12" />
            <span className="text-xl font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
