import React from 'react';

const Sidebar = () => {
  const followedChannels = [
    { name: 'EryckGnz92', status: 'Desconectado', imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/790ff8ae-08f4-468a-a16c-7f3a8347eb05-profile_image-70x70.jpeg' },
    { name: 'Richard28...', status: 'Desconectado', imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6d40f51a-6940-41d7-82af-24cf5e9a0864-profile_image-70x70.png' },
    { name: 'elcuelgue...', status: 'Desconectado', imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a0742b8e-738e-46c1-ae8a-2144ab7594d7-profile_image-70x70.png' },
    { name: 'cricastrx_', status: 'Desconectado', imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/be1fae54-cee5-4b16-a133-cee1dc271faa-profile_image-70x70.png' },
    { name: 'Querveroo', status: 'Desconectado', imageUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/edd1d676-ba24-4940-97b3-e3d23e2eeca8-profile_image-70x70.png' },
  ];

  const recommendedChannels = [
    { name: 'TheGrefg', game: 'League of Legends', viewers: '5 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/0107210e-a98c-409d-92a6-1caf70bb3953-profile_image-70x70.png' },
    { name: 'KaiCenat', game: 'Minecraft', viewers: '304.5 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png' },
    { name: 'ElVenado98', game: 'Call of Duty: Warzone', viewers: '2.1 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1d8cd548-04fa-49fb-bfcd-f222f73482b6-profile_image-70x70.png' },
    { name: 'elxokas', game: 'Black Myth: Wukong', viewers: '10.2 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-70x70.png' },
    { name: 'abdul', game: 'League of Legends', viewers: '5 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/49bdc39f-4b83-491b-8b99-8719ed8faca9-profile_image-70x70.png' },
    { name: 'chunlee', game: 'Minecraft', viewers: '304.5 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/56016d21-9c42-4c7c-9390-6c31a74364e1-profile_image-70x70.png' },
    { name: 'Elcubas', game: 'Call of Duty: Warzone', viewers: '2.1 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3227ad0b-9efe-49bd-bda9-88f683050a05-profile_image-70x70.png' },
    { name: 'pablo', game: 'Black Myth: Wukong', viewers: '10.2 k', isLive: true, imageUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-70x70.png' },
  ];

  return (
    <div className="w-full sm:w-64 bg-zinc-800 text-white p-4">
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold">Canales que Sigues</h2>
        <div className="mt-4">
          {followedChannels.map((channel, index) => (
            <div key={index} className="flex items-center mb-3">
              <img src={channel.imageUrl} alt={channel.name} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" />
              <div className="ml-3">
                <p className="text-sm sm:text-base font-semibold truncate">{channel.name}</p>
                <p className="text-xs sm:text-sm text-gray-400">{channel.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold">Canales Recomendados</h2>
        <div className="mt-4">
          {recommendedChannels.map((channel, index) => (
            <div key={index} className="flex items-center mb-3">
              <img src={channel.imageUrl} alt={channel.name} className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" />
              <div className="ml-3">
                <p className="text-sm sm:text-base font-semibold truncate">{channel.name}</p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{channel.game}</p>
                <div className="flex items-center text-xs text-red-500">
                  <span className="text-red-500">•</span> {channel.viewers}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
