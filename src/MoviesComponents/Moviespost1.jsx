import React, { useState, useEffect } from 'react';
import axios from 'axios';
import placeholderImage from '../Assets/images/N-logo.png';

function Moviespost1() {
  const [moviePosters, setMoviePosters] = useState([]);

  useEffect(() => {
    const fetchMoviePosters = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=050f33548a3eb8b35fc4d811ccf09550`);
        setMoviePosters(response.data.results);
      } catch (error) {
        console.error('Error fetching movie posters:', error);
      }
    };

    fetchMoviePosters();
  }, []);

  return (
    <div className='px-16 py-10'>
      <h1 className='text-white font-bold text-2xl'>Trending Now</h1>

      <div className='flex overflow-x-hidden gap-2 my-4'>
        {moviePosters.length > 0 ? (
          moviePosters.map((movie, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Movie Poster ${index}`}
              className='h-48 w-32 cursor-pointer brightness-50 hover:brightness-100 duration-300 ease-in-out'
            />
          ))
        ) : (
          <img src={placeholderImage} alt="Placeholder" className='' />
        )}
      </div>
    </div>
  );
}

export default Moviespost1;
