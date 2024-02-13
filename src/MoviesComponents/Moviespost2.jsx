import React, { useState, useEffect } from 'react';
import axios from 'axios';
import placeholderImage from '../Assets/images/N-logo.png';

function Moviespost2() {
  const [moviePosters, setMoviePosters] = useState([]);
  const [page, setPage] = useState(1); // Track the current page

  useEffect(() => {
    const fetchMoviePosters = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=571828336bbbb0f0b1af62bd90cdaf3c&with_original_language=hi&year=2022&page=${page}`);
        setMoviePosters(prevMovies => [...prevMovies, ...response.data.results]); // Append new results to existing movie posters
        setPage(page + 1); // Increment the page for the next request
      } catch (error) {
        console.error('Error fetching trending Bollywood movies:', error);
      }
    };

    fetchMoviePosters();
  }, [page]); // Trigger effect when page changes

  return (
    <div className='px-16 py-10'>
      <h1 className='text-white font-bold text-2xl'>Bollywood movies</h1>

      <div className='flex flex-wrap overflow-x-hidden gap-2 my-4'>
        {moviePosters.length > 0 ? (
          moviePosters.map((movie, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Movie Poster ${index}`}
              className='h-48 w-32'
            />
          ))
        ) : (
          <img src={placeholderImage} alt="Placeholder" className='' />
        )}
      </div>
    </div>
  );
}

export default Moviespost2;
