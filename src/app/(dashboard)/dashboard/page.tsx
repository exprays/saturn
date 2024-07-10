import React from 'react'
import { getUserAppointments } from '@/actions/appointment'
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from '@/actions/dashboard'
import DashboardCard from '@/components/dashboard/cards'
import { PlanUsage } from '@/components/dashboard/plan-usage'
import InfoBar from '@/components/infobar'
import { Separator } from '@/components/ui/separator'
import CalIcon from '@/icons/cal-icon'
import PersonIcon from '@/icons/person-icon'
import { TransactionsIcon } from '@/icons/transactions-icon'
import { DollarSign } from 'lucide-react'

const Page = async () => {
  const clients = await getUserClients()
  const sales = await getUserBalance()
  const bookings = await getUserAppointments()
  const plan = await getUserPlanInfo()
  const transactions = await getUserTransactions()
  const products = await getUserTotalProductPrices()

  return (
    <div className="flex flex-col h-full">
      <InfoBar />
      <div className="overflow-y-auto flex-1">
        <div className="px-6 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              value={clients || 0}
              title="Potential Clients"
              icon={<PersonIcon />}
            />
            <DashboardCard
              value={products! * clients! || 0}
              sales
              title="Pipeline Value"
              icon={<DollarSign />}
            />
            <DashboardCard
              value={bookings || 0}
              title="Appointments"
              icon={<CalIcon />}
            />
            <DashboardCard
              value={sales || 0}
              sales
              title="Total Sales"
              icon={<DollarSign />}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-bold text-2xl">Plan Usage</h2>
              <p className="text-sm font-light mb-4">
                A detailed overview of your metrics, usage, customers and more
              </p>
              <PlanUsage
                plan={plan?.plan!}
                credits={plan?.credits || 0}
                domains={plan?.domains || 0}
                clients={clients || 0}
              />
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-center mb-5">
                <div className="flex gap-3 items-center">
                  <TransactionsIcon />
                  <p className="font-bold">Recent Transactions</p>
                </div>
                <p className="text-sm cursor-pointer hover:underline">See more</p>
              </div>
              <Separator orientation="horizontal" className="mb-5" />
              {transactions &&
                transactions.data.map((transaction) => (
                  <div
                    className="flex gap-3 w-full justify-between items-center border-b py-5"
                    key={transaction.id}
                  >
                    <p className="font-semibold">
                      {transaction.calculated_statement_descriptor}
                    </p>
                    <p className="font-bold text-xl">
                      ${(transaction.amount / 100).toFixed(2)}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page