"use client";
import React from 'react'
import AnalyticsCard from '@/app/components/DashboardComponents/AnalyticalCard'
import StatisticCard from '@/app/components/DashboardComponents/StatisticCard'


const Dashboard = () => {
  return (
    <div>
        <h1 className='text-3xl text-black font-bold'>Dashboard</h1>
        <div>
        <AnalyticsCard/>
        </div>
        <StatisticCard/>
    </div>
  )
}

export default Dashboard