import React from "react";
import { getUserAppointments } from "@/actions/appointment";
import {
  getUserBalance,
  getUserClients,
  getUserPlanInfo,
  getUserTotalProductPrices,
  getUserTransactions,
} from "@/actions/dashboard";
import DashboardCard from "@/components/dashboard/cards";
import { PlanUsage } from "@/components/dashboard/plan-usage";
import InfoBar from "@/components/infobar";
import { Separator } from "@/components/ui/separator";
import CalIcon from "@/icons/cal-icon";
import PersonIcon from "@/icons/person-icon";
import { ArrowUpRight, CreditCard, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  const clients = await getUserClients();
  const sales = await getUserBalance();
  const bookings = await getUserAppointments();
  const plan = await getUserPlanInfo();
  const transactions = await getUserTransactions();
  const products = await getUserTotalProductPrices();

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
              icon={<CreditCard />}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card>
              <CardHeader>

              <CardTitle className="font-bold text-2xl">Plan Usage</CardTitle>
              <CardDescription className="text-sm font-light mb-4">
                A detailed overview of your metrics, usage, customers and more
              </CardDescription>
              </CardHeader>
              <CardContent>
              <PlanUsage
                plan={plan?.plan!}
                credits={plan?.credits || 0}
                domains={plan?.domains || 0}
                clients={clients || 0}
              />
              </CardContent>
            </Card>
            <Card x-chunck="dashboard-01-chunck-03">
              <CardHeader className="space-y-4">
                <div className="flex flex-row items-center">
                  <div className="grid gap-2">
                    <CardTitle>Recent transactions</CardTitle>
                    <CardDescription>
                      Recent transactions from your Pipeline.
                    </CardDescription>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="ml-auto gap-1 bg-mayanjade hover:bg-aquamarine"
                  >
                    <Link href="#">
                      View All
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <Separator className="h-[0.5px] text-silvercloud left-4 right-4" />
              </CardHeader>
              <CardContent className="flex flex-col gap-4 mt-4">
                {transactions &&
                  transactions.data.map((transaction) => (
                    <div
                      className="flex items-center gap-4"
                      key={transaction.id}
                    >
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarFallback className="uppercase">
                          {transaction.calculated_statement_descriptor?.slice(
                            0,
                            2
                          )}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          {transaction.calculated_statement_descriptor}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.receipt_email}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        ${(transaction.amount / 100).toFixed(2)}
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
