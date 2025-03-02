// Updated AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300 p-10">
      <h1 className="text-5xl font-bold text-yellow-300 drop-shadow-lg">Alona Power</h1>
      <p className="text-2xl text-white mt-4 italic">Hi, coming soon<span className='text-red-700/30'>.</span><span className='text-red-700/40'>.</span><span className='text-red-700/50'>.</span><span className='text-red-700/70'>xoxo</span></p>
    </section>
  );
};

export default AboutMe;