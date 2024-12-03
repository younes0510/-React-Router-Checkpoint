import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from './movis';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id == parseInt(id));

 

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <h1 className="text-3xl font-bold text-red-800 mb-4">{movie.title}</h1>
      <iframe
       
        src={movie.trailer}
        title={movie.title}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg shadow-md mb-6 w-full h-[500px] "
      ></iframe>
      <p className="text-gray-700 mb-6 text-2xl">{movie.description}</p>
      <Link
        to="/"
        className=" px-4 py-2 bg-red-800 text-white rounded hover:bg-red-950 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDetails;
