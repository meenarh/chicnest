import React from 'react'
import Link from 'next/link'

type Props = {}

const Homepage = (props: Props) => {
  return (
   <div className='bg-[url(/home.png)] bg-cover h-screen bg-center w-screen text-center' id='home'>
      <h4 className='bg-white text-6xl font-serif font-normal text-[#FF2E00] md:mt-[350px] mt-[350px]'>Discover Trendsetting Fashion at ChicNest</h4>
      <button className='px-6 py-4 text-white border border-white mt-5 hover:bg-black hover:text-white'><Link href='#shop'>View More</Link></button>
   </div>
  )
}

export default Homepage