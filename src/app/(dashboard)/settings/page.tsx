import InfoBar from '@/components/infobar'
import { ModeToggle } from '@/components/mod/mode-toggle'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <ModeToggle />
        <ChangePassword />
      </div>
    </>
  )
}

export default Page
