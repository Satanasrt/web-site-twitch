import React, { useState } from 'react';
import Sidebar from './Componets/Sidebar';
import TopBar from './Componets/TopBar';
import ExploreSection from './Componets/ExploreSection';
import GameList from './Componets/GameList';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

   const games = [
    { title: 'Just Chatting', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg', viewers: '469.6 k', tags: ['IRL (vida real)'] },
    { title: 'Fortnite', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/519291_IGDB-285x380.jpg', viewers: '70.1 k', tags: ['Shooter', 'Juego de rol'] },
    { title: 'Apex Legends', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg', viewers: '60.2 k', tags: ['Shooter', 'Multijugador'] },
    { title: 'Valorant', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg', viewers: '120.3 k', tags: ['Shooter', 'Estrategia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/1337444628-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/2692_IGDB-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/504461_IGDB-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/30921-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
    { title: 'Minecraft', imageUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg', viewers: '200.8 k', tags: ['Sandbox', 'Supervivencia'] },
  ];





  const handleSearch = () => {
    console.log('Buscando:', searchQuery, 'Etiquetas:', selectedTag);
  };

  const handleLanguageSelection = () => {
    console.log('Idioma seleccionado:', selectedLanguage);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <div className="p-6 flex-1">
          <ExploreSection />
          <h1 className="text-4xl mb-8 font-bold"></h1>

          <div className="flex items-center space-x-10 mb-4">
            <nav className="flex space-x-10">
              <a href="#" className="text-white font-semibold hover:text-purple-500 text-xl">
                Categoría
              </a>
              <a href="#" className="text-purple-500 font-semibold hover:text-white text-xl">
                Canales en vivo
              </a>
            </nav>
          </div>

          {/* Nuevo buscador combinado */}
          <div className="flex items-center mb-10 w-full justify-start ">
            <input
              type="text"
              placeholder="Buscar o Buscar etiquetas"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-md "
            />
            
            {/* Botón "Ordenar por" movido hacia la derecha */}
            <div className="ml-auto flex space-x-10">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded-md"
              >
                <option value="">Seleccionar idioma</option>
                <option value="es">Español</option>
                <option value="en">Inglés</option>
              </select>
            </div>
          </div>

          <GameList games={games} />
        </div>
      </div>
    </div>
  );
};

export default App;
