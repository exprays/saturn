import * as React from 'react'
import Link from 'next/link'
import { ModeToggle } from '../mod/mode-toggle'
import { SaturnLogo } from '../../../public/icons/saturn'

function NavBar() {
  return (
    <div className="flex items-center justify-between px-7 py-4 font-bold leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex items-center gap-1.5 text-2xl tracking-tighter text-neutral-700">
        <SaturnLogo height={40} width={40}/>
        <p className='text-center mt-1 pl-2 text-[#767f7d] dark:text-[#c2cbc9]'>
          Saturn
        </p>
      </div>
      <ul className="gap-5 justify-center text-sm leading-5 text-neutral-700 font-normal hidden md:flex flex-grow">
        <li>Home</li>
        <li>Pricing</li>
        <li>News Room</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="bg-[#009A6E] px-4 py-2 rounded-sm text-white"
        >
          Free Trial
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavBar