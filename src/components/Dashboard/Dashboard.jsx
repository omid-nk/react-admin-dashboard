import { useState } from "react";
import { useId } from "react";
import { HiUsers } from "react-icons/hi2";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { HiChartBar } from "react-icons/hi2";
import AreaChart from "../modules/AreaChart/AreaChart";

function Dashboard() {
  return (
    <>
      <header className="flex flex-wrap gap-2 lg:flex-nowrap">
        <div className="flex w-full items-center justify-start gap-6 rounded bg-purple-100 p-4 lg:w-4/12">
          <div>
            <HiUsers className="h-12 w-12 text-purple-600" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="cursor-default">Clients</h3>
            <p className="cursor-default text-xl font-bold">512</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-6 rounded bg-green-100 p-4 lg:w-4/12">
          <div>
            <HiMiniShoppingCart className="h-12 w-12 text-green-600" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="cursor-default">Sales</h3>
            <p className="cursor-default text-xl font-bold">$7,770</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-6 rounded bg-orange-100 p-4 lg:w-4/12">
          <div>
            <HiChartBar className="h-12 w-12 text-orange-600" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="cursor-default">Performance</h3>
            <p className="cursor-default text-xl font-bold">256%</p>
          </div>
        </div>
      </header>
      <div className="mt-6 w-full bg-white p-2">
        <h3 className="mb-4 text-center text-lg font-semibold text-gray-800">
          Sales Line Chart
        </h3>
        <div className="h-72 w-full">
          <AreaChart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
