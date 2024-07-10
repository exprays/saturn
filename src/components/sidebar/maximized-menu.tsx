import React from 'react'
import { LogOut, Menu, MonitorSmartphone } from 'lucide-react'
import { SIDE_BAR_MENU } from '@/constants/menu'
import DomainMenu from './domain-menu'
import MenuItem from './menu-item'
import { SaturnLogo } from '../../../public/icons/saturn'

type Props = {
  onExpand(): void
  current: string
  onSignOut(): void
  domains:
    | {
        id: string
        name: string
        icon: string | null
      }[]
    | null
    | undefined
}

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props) => {
  return (
    <div className="py-3 px-4 flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div className='flex flex-row'>
          <SaturnLogo height={38} width={38}/>
          <p className='text-center mt-1 pl-2 text-[#767f7d] dark:text-[#c2cbc9] font-semibold text-xl'>
            Saturn
          </p>
        </div>
        <Menu
          className="cursor-pointer"
          onClick={onExpand}
        />
      </div>
      <div className="flex flex-col justify-between h-full pt-10">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem
              size="max"
              {...menu}
              key={key}
              current={current}
            />
          ))}
          <DomainMenu domains={domains} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 mb-3">OPTIONS</p>
          <MenuItem
            size="max"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          <MenuItem
            size="max"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          />
        </div>
      </div>
    </div>
  )
}

export default MaxMenu