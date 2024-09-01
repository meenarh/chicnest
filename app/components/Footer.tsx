import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='p-10 flex flex-col lg:flex-row gap-5 justify-between font-serif bg-black w-full h-fit'>
      <h3 className='text-white text-4xl'>ChicNest</h3>
      <ul className="flex flex-row justify-between md:gap-10 gap-8 font-serif md:text-lg text-sm text-white">
      <li className="hover:underline">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:underline">
        <Link href="/products">Shop</Link>
      </li>
      <li className="hover:underline">
        <Link href="#">Blog</Link>
      </li>
      <li className="hover:underline">
        <Link href="#">Contact Us</Link>
      </li>
    </ul>
    <span className='text-center text-white text-sm'>©2024 | Dodocodesss</span>
    </div>
  )
}

export default Footer