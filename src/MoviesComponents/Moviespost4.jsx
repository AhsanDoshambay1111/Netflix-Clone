import React, { useState, useEffect } from 'react';
import axios from 'axios';
import placeholderImage from '../Assets/images/N-logo.png';

function TVShows() {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [showAll, setShowAll] = useState(false); // Track whether to show all shows
  const [showsToShow, setShowsToShow] = useState(18); // Number of shows to display

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=414f8f4ce35d8b30e508b501b30a4417&page=${page}`);
        setTvShows(prevShows => [...prevShows, ...response.data.results]); // Append new results to existing TV shows
        setPage(page + 1); // Increment the page for the next request
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, [page]); // Trigger effect when page changes

  const handleLoadMore = () => {
    setShowAll(!showAll);
    setShowsToShow(showAll ? 18 : tvShows.length);
  };

  return (
    <div className='px-16 py-10'>
      <h1 className='text-white font-bold text-2xl'>TV Shows</h1>

      <div className='flex flex-wrap overflow-x-hidden gap-2 my-4'>
        {tvShows.length > 0 ? (
          tvShows.slice(0, showsToShow).map((show, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={`TV Show Poster ${index}`}
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

export default TVShows;
