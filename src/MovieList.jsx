import React from 'react';
import movies from './movis';
import { Link } from 'react-router-dom';

const MovieList = () => {
  return (
    <div className="p-6 bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Movie List</h1>
      <div className="grid grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className=" rounded-lg shadow-xl  p-4">
              <img src={movie.poster} alt={movie.title} className="rounded-lg mb-4 w-full h-[500px]" />
              <h1 className="text-2xl font-bold text-red-900">{movie.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
