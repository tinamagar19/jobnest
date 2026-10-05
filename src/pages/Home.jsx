import React from 'react';
import { Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-gradient-to-b from-primary-50 to-white px-4 py-20 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6">
          Find your dream job with <span className="text-primary-600">JobNest</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Discover thousands of job opportunities with all the information you need. 
          Its your future, take control of it today.
        </p>
        
        <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row max-w-2xl mx-auto gap-2 border border-gray-100">
          <div className="flex-grow flex items-center px-4 bg-gray-50 rounded-xl">
            <Search className="text-gray-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Job title, keyword, or company" 
              className="w-full bg-transparent border-none focus:ring-0 px-3 py-3 text-gray-900 outline-none"
            />
          </div>
          <button className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-xl font-medium transition-colors whitespace-nowrap shadow-md">
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
