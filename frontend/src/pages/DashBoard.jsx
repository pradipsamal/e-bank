import React from 'react'
import './DashBoard.css'
import DashboardHeader from '../components/Dashboard/DashboardHeader/DashboardHeader'
import WelcomeBanner from '../components/Dashboard/WelcomeBanner/WelcomeBanner'
import BalanceOverview from '../components/Dashboard/BalanceOverview/BalanceOverview'
import Navbar from '../components/Navbar/Navbar'

const DashBoard = () => {
    return (
        <div className='dashboard-page'>
            <main className='dashboard-main'>
                <WelcomeBanner />
                <BalanceOverview />
            </main>
        </div>
    )
}

export default DashBoard
