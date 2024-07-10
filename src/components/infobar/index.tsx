import React from 'react'
import BreadCrumb from './bread-crumb'
import { Card } from '../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const InfoBar = () => {
  return (
    <div className="flex w-full justify-between items-center py-3 mb-8 px-6">
      <BreadCrumb />
      <div className="flex gap-4 items-center mr-6">
        <Card className="rounded-full flex gap-3 p-2 text-ghost">
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <Trash size={20} />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full">
            <Star size={20} />
          </button>
        </Card>
        <Avatar className="cursor-pointer">
          <AvatarFallback className="bg-[#009A6E] text-white">
            <Headphones size={20} />
          </AvatarFallback>
        </Avatar>
        <Avatar className="cursor-pointer">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default InfoBar