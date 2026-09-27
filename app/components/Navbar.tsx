'use client'
import Link from "next/link"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="py-3 px-8 bg-[#F5F7FA]">
      <div className="bg-transparent max-w-360 mx-auto flex
      items-center justify-between">
        <div className="flex items-center gap-1">
        <svg width="35" height="24" viewBox="0 0 35 24"
        fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7863 13.1341L13.3954 22.3669L8.00448
          13.1341H18.7863ZM20.2305 12.3088H6.55444L13.3954
          24L20.2305 12.3088Z" fill="#263238"/>
          <path d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591
          1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z"
          fill="#263238"/>
          <path d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z"
          fill="#4CAF4F"/>
          <path d="M13.3955 0.905762L19.4121 11.1889H7.36728L13.3955
          0.905762Z" fill="#4CAF4F"/>
          <path d="M20.9615 13.4341L26.9839 24H14.6526L20.7744
          13.4341H20.9615Z" fill="#4CAF4F"/>
          <path d="M22.2653 12.7935L28.1591 23.1978L34.1347
          12.7935H22.2653Z" fill="#4CAF4F"/>
        </svg>
        <h2 className="text-xl font-bold text-[#263238]
        sm:text-2xl">
            Nexcent
        </h2>
      </div>
      <div className="md:flex items-center gap-5 text-sm lg:gap-10
      text-[#18191F] hidden">
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Service</Link>
        <Link href={'/'}>Feature</Link>
        <Link href={'/'}>Product</Link>
        <Link href={'/'}>Testimonial</Link>
        <Link href={'/'}>FAQ</Link>
      </div>
      <div className="flex items-center gap-1 text-xs sm:gap-2">
        <button className="cursor-pointer md:hidden"
        onClick={() => setHidden(prev => !prev)}>
          <FiChevronDown
          className={`transition-transform ${!hidden &&
          'rotate-180'}`}/>
        </button>
        <button className="text-[#4CAF4F] py-2.5 px-3 sm:px-4.5
        cursor-pointer">
         Login
        </button>
        <button className="bg-[#4CAF4F] py-2.5 px-3 sm:px-4.5
        text-white rounded-md cursor-pointer">
         Sign up
        </button>
      </div>
      <div className={`absolute top-13 right-13
        w-40 h-fit bg-white p-3 flex flex-col
        gap-y-1 rounded-md tracking-wide ${hidden ? 'hidden':
        'block'} text-sm text-[#18191F] md:hidden`}>
          <Link href={'/'} className="p-2 w-full
          hover:bg-[#4caf4f48] rounded-sm">Home</Link>
          <Link href={'/'} className="p-2 w-full
          hover:bg-[#4caf4f48] rounded-sm">Service</Link>
          <Link href={'/'} className="p-2 w-full
          hover:bg-[#4caf4f48] rounded-sm">Feature</Link>
          <Link href={'/'} className="p-2 w-full
          hover:bg-[#4caf4f48] rounded-sm">Product</Link>
          <Link href={'/'} className="p-2 w-full
          hover:bg-[#4caf4f48] rounded-sm">Testimonial</Link>
          <Link href={'/'} className="p-2 w-full
          hover:bg-[#4caf4f48] rounded-sm">FAQ</Link>
      </div>  
      </div>
    </nav>
  )
}

export default Navbar