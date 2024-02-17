import React, { useState, useEffect } from 'react';
import axios from 'axios';
import placeholderImage from '../Assets/images/N-logo.png';

function Moviespost1() {
  const [moviePosters, setMoviePosters] = useState([]);

  useEffect(() => {
    const fetchMoviePosters = async () => {
      try {
        let posters = [];
        let page = 1;

        // Fetch until we have 100 posters or there's no more pages
        while (posters.length < 300) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2d64fd817e2b86c50a0213b6a33b33b0&page=${page}`);
          const results = response.data.results;
          
          // Push each poster to the array
          posters = [...posters, ...results.map(movie => movie.poster_path)];
          
          // Move to the next page
          page++;

          // Break the loop if there are no more pages
          if (results.length === 0) break;
        }

        setMoviePosters(posters.slice(0, 300)); // Set only first 100 posters
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
          moviePosters.map((poster, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${poster}`}
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
