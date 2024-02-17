import React from 'react'
import Moviesbanner from '../components/Moviesbanner'
import Moviespost1 from '../MoviesComponents/Moviespost1'
import Moviespost2 from '../MoviesComponents/Moviespost2'
import Moviespost3 from '../MoviesComponents/Moviespost3'
import Moviespost4 from '../MoviesComponents/Moviespost4'
import Footer from '../components/Footer'

function Movies() {
  return (
    <div className='bg-[black] min-h-[100vh]'>
      <Moviesbanner/>
      <Moviespost1/>
      <Moviespost2/>
      <Moviespost3/>
      <Moviespost4/>
      <Footer/>

    </div>
  )
}

export default Movies
