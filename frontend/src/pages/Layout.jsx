import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import DashBoard from './DashBoard'
import Accounts from '../components/Accounts/Accounts'
import CreateAccount from '../components/CreateAccount/CreateAccount'
import Debit from '../components/Debit/Debit'
import Transaction from '../components/transactions/Trasaction'
import DeleteAccount from '../components/DeleteAccount/DeleteAccount'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout
