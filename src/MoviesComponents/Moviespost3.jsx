import React, { useState, useEffect } from 'react';
import axios from 'axios';
import placeholderImage from '../Assets/images/N-logo.png';

function Moviespost3() {
  const [moviePosters, setMoviePosters] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [showAll, setShowAll] = useState(false); // Track whether to show all posters
  const [postersToShow, setPostersToShow] = useState(18); // Number of posters to display

  useEffect(() => {
    const fetchMoviePosters = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=14449b2a15b481d1278c268419107005&with_original_language=en&year=2022&page=${page}`);
        setMoviePosters(prevMovies => [...prevMovies, ...response.data.results]); // Append new results to existing movie posters
        setPage(page + 1); // Increment the page for the next request
      } catch (error) {
        console.error('Error fetching trending Hollywood movies:', error);
      }
    };

    fetchMoviePosters();
  }, [page]); // Trigger effect when page changes

  const handleLoadMore = () => {
    setShowAll(!showAll);
    setPostersToShow(showAll ? 18 : moviePosters.length);
  };

  return (
    <div className='px-16 py-10'>
      <h1 className='text-white font-bold text-2xl'>Hollywood movies</h1>

      <div className='flex flex-wrap overflow-x-hidden gap-2 my-4'>
        {moviePosters.length > 0 ? (
          moviePosters.slice(0, postersToShow).map((movie, index) => (
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

      <button className='text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black' onClick={handleLoadMore}>
        {showAll ? 'Load Less' : 'Load More'}
      </button>
    </div>
  );
}

export default Moviespost3;
