"use client";
import React from 'react'
import AnalyticsCard from '@/app/components/DashboardComponents/AnalyticalSard'
import EarningsCard from '@/app/components/DashboardComponents/EarningsCard '
import StatisticCard from '@/app/components/DashboardComponents/StatisticCard'


const Dashboard = () => {
  return (
    <div>
        <h1 className='text-3xl text-black font-bold'>Overview</h1>
        <div>
        <AnalyticsCard/>
        </div>
        <StatisticCard/>
        <EarningsCard/>
    </div>
  )
}

export default Dashboard