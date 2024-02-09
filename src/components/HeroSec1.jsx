import React from 'react'
import img2 from '../Assets/images/imgq.gif';

function HeroSec1() {
  return (
    <div className='bg-[black]'>
      <hr className='h-[10px] relative border-none bg-[#232323]'></hr>

<div className='md:flex justify-between items-center'>

 <div className='md:w-[50%] py-8 px-4 lg:px-16'>
<h1 className='text-white lg:text-5xl text-3xl font-bold'>Enjoy on your TV</h1>
<p className='text-white pt-4 lg:text-xl'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
</div> 

<div className='md:w-[50%] flex justify-end'>
  <img src={img2}/>
</div>

</div>
<hr className='h-[10px] border-none bg-[#232323]'></hr>
    </div>
  )
}

export default HeroSec1
