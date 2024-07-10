import React from 'react'

type Props = {
  title: string
  value: number
  icon: JSX.Element
  sales?: boolean
}

const DashboardCard = ({ icon, title, value, sales }: Props) => {
  return (
    <div className="rounded-lg flex flex-col gap-3 p-6 border border-border bg-cream dark:bg-muted w-full h-full">
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
      <p className="font-bold text-3xl mt-auto">
        {sales && '$'}
        {value.toLocaleString()}
      </p>
    </div>
  )
}

export default DashboardCard