import React from 'react'
import Moviesbanner from '../components/Moviesbanner'
import Moviespost1 from '../MoviesComponents/Moviespost1'
import Moviespost2 from '../MoviesComponents/Moviespost2'

function Movies() {
  return (
    <div className='bg-[black] min-h-[100vh]'>
      <Moviesbanner/>
      <Moviespost1/>
      <Moviespost2/>

    </div>
  )
}

export default Movies
