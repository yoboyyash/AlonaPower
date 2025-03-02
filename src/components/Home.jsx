// Updated Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col text-center relative">
      <div className="h-screen w-full "></div> {/* Ensures the video is fully scrolled through first */}
      <section className="w-full flex flex-col justify-center items-center text-center p-10 bg-gradient-to-b from-blue-500/40 via-blue-700/40 to-purple-400/30 min-h-screen">
        <h1 className="text-4xl mt-40 font-bold text-black/60">Google Photos API, coming soon<span className='text-red-700/30'>.</span><span className='text-red-700/40'>.</span><span className='text-red-700/50'>.</span><span className='text-red-700/70'>xoxo</span></h1>
      </section>
    </div>
  );
};

export default Home;
