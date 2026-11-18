import { useEffect, useState } from "react";

import AccountHeader from "./AccountHeader";
import AccountList from "./AccountList";

import "./Accounts.css";
import axios from "axios";
import { Outlet } from "react-router";

function Accounts() {
  const [accounts, setAccounts] = useState([]);

  let Allaccounts = async()=>{
    let res = await axios.get('http://localhost:3200/allusers')
    setAccounts(res.data.data)
  }

  useEffect(()=>{
    Allaccounts()
  } , [])

  useEffect(()=>{
    console.log(accounts)
  } , [Allaccounts])
  

  const handleDelete = (id) => {
    const account = accounts.find(
      (item) => item.id === id
    );

    if (!account) return;

    const confirmed = window.confirm(
      `Delete account ${account.accountNumber}?`
    );

    if (!confirmed) return;

    setAccounts((previous) =>
      previous.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <main className="accounts-page">

      <AccountHeader
        totalAccounts={accounts.length}
      />

      <AccountList
        accounts={accounts}
        onDelete={handleDelete}
      />

    </main>
  );
}

export default Accounts;

// import React from 'react'
// import DeleteAccount from './DeleteAccount'

// const Accounts = () => {
//   return (
//     <div>
//         <DeleteAccount />
//     </div>
//   )
// }

// export default Accounts
