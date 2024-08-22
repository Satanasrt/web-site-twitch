import React from 'react';

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50    bg-zinc-800 text-white flex items-center justify-between p-3">
      {/* Logo y enlaces de navegación */}
      <div className="flex items-center space-x-10">
        <img
          src="https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png"
          alt="Twitch Logo"
          className="w-10 h-10"
        />
        <nav className="flex space-x-10">
          <a href="#" className="text-white font-semibold hover:text-purple-500 text-2xl">
            Siguiendo
          </a>
          <a href="#" className="text-purple-500 font-semibold hover:text-white text-2xl">
            Explorar
          </a>
        </nav>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex items-center bg-zinc-800 rounded-md overflow-hidden w-full max-w-md  border-b-2 border-gray-700">
      <input
        type="text"
        placeholder="Buscar"
        className=" bg-zinc-900 text-gray-300 px-4 py-2 w-full outline-none"
      />
      <button className=" bg-zinc-800 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
          />
        </svg>
      </button>
    </div>


      {/* Íconos de la derecha */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m3 0h4m0 0V4a2 2 0 114 0v4m-4 0H8m6 0h-4"
            />
          </svg>
        </button>
        <button className="text-gray-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-4.215A2 2 0 0016.67 11H7.33a2 2 0 00-1.924 1.785L4 17h5m6 0v1a2 2 0 11-4 0v-1m4 0H8"
            />
          </svg>
        </button>
        <button className="text-gray-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700">
          Disfruta gratis sin anuncios
        </button>
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/76ac4da8-7837-4b5d-8fa7-69d8b7f469a2-profile_image-70x70.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default TopBar;