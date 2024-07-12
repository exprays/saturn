import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import { SaturnLogo } from '../../../public/icons/saturn'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
      <div className='flex flex-row'>
      <SaturnLogo height={38} width={38}/>
        <p className='text-center mt-1 pl-2 text-[#767f7d] dark:text-[#c2cbc9] font-semibold text-xl'>
          Saturn
        </p>
      </div>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, I’m your AI powered sales assistant, Saturn!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Saturn is capable of capturing lead information without a form...{' '}
          <br />
          something never done before 😉
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48 rounded-lg"
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}

export default Layout
