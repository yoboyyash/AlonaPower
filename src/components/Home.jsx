import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-full overflow-auto">
      <div className="flex flex-col text-center relative">
        <div className="h-screen w-full"></div> {/* Ensures the video is fully scrolled through first */}

        <section className="w-full flex flex-col justify-center items-center text-center p-10 bg-gradient-to-b from-blue-500/40 via-blue-700/20 to-purple-400/30 min-h-screen">
          <h1 className="text-4xl mt-40 font-bold text-black/60">Google Photos API, coming soon<span className='text-red-700/30'>.</span><span className='text-red-700/40'>.</span><span className='text-red-700/50'>.</span><span className='text-red-700/70'>xoxo</span></h1>
        </section>

        <section className='bg-gradient-to-b from-sky-400/20 via-blue-600/20 to-purple-300/30 min-h-screen flex items-center justify-center'>
          <h2 className="text-3xl font-bold text-black/60">coming soon<span className='text-red-700/30'>.</span><span className='text-red-700/40'>.</span><span className='text-red-700/50'>.</span><span className='text-red-700/70'>xoxo</span></h2>
        </section>

        <section className='bg-gradient-to-b from-teal-700/20 via-lime-500/20 to-amber-400/20 min-h-screen flex items-center justify-center'>
          <h2 className="text-3xl font-bold text-black/60">coming soon<span className='text-red-700/30'>.</span><span className='text-red-700/40'>.</span><span className='text-red-700/50'>.</span><span className='text-red-700/70'>xoxo</span></h2>
        </section>
      </div>
    </div>
  );
};

export default Home;
