'use client'
import useSideBar from '@/context/use-sidebar'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import MaxMenu from './maximized-menu'
import { MinMenu } from './minimized-menu'

type Props = {
  domains:
    | {
        id: string
        name: string
        icon: string
      }[]
    | null
    | undefined
}

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cn(
        'bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative',
        expand === undefined && 'w-[60px]',
        expand ? 'animate-open-sidebar w-[240px]' : 'animate-close-sidebar w-[60px]'
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page || ''}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          onShrink={onExpand}
          current={page || ''}
          onSignOut={onSignOut}
        />
      )}
    </div>
  )
}

export default SideBar