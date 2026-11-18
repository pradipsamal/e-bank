import { useState } from "react";
import TransactionHeader from "./TransactionHeader";
import TransactionStats from "./TransactionStats";
import TransactionFilters from "./TransactionFilters";
import TransactionList from "./TransactionList";
import "./Trasaction.css";
import { useEffect } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

function Transaction() {
    const [transactions , setTrasactons] = useState([
        // {
        //     id: 1,
        //     transactionId: "TXN-100001",
        //     accountnumber: "100245678901",
        //     name: "Rahul Sharma",
        //     type: "Credit",
        //     amount: 25000,
        //     date: "02 Sep 2026",
        //     time: "10:30 AM",
        // },
        // {
        //     id: 2,
        //     transactionId: "TXN-100002",
        //     accountnumber: "100378945612",
        //     name: "Priya Singh",
        //     type: "Debit",
        //     amount: 8500,
        //     date: "02 Sep 2026",
        //     time: "11:15 AM",
        // },
        // {
        //     id: 3,
        //     transactionId: "TXN-100003",
        //     accountnumber: "100456789123",
        //     name: "Amit Verma",
        //     type: "Credit",
        //     amount: 50000,
        //     date: "01 Sep 2026",
        //     time: "02:45 PM",
        // },
        // {
        //     id: 4,
        //     transactionId: "TXN-100004",
        //     accountnumber: "100589123456",
        //     name: "Neha Gupta",
        //     type: "Debit",
        //     amount: 12000,
        //     date: "01 Sep 2026",
        //     time: "04:20 PM",
        // },
    ]);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All");

    let allOperations = async ()=>{
        try{
            let res = await axios.get('http://localhost:3200/allcreditdebit')
            console.log(res.data.data)
            setTrasactons(res.data.data.reverse())
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        allOperations()
    } , [])

    const filteredTransactions = transactions.filter((transaction) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
            transaction.name.toLowerCase().includes(searchText) ||
            transaction.accountnumber.toString().includes(searchText) ||
            transaction.trasanctionId.toLowerCase().includes(searchText);

        const matchesType =
            filterType === "All" ||
            transaction.type === filterType;

        return matchesSearch && matchesType;
    });

    const totalCredit = transactions
        .filter((transaction) => transaction.type === "Credit")
        .reduce((total, transaction) => total + transaction.amount, 0);

    const totalDebit = transactions
        .filter((transaction) => transaction.type === "Debit")
        .reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <main className="transactions-page">
            <TransactionHeader totalTransactions={transactions.length} />

            <TransactionStats
                totalTransactions={transactions.length}
                totalCredit={totalCredit}
                totalDebit={totalDebit}
            />

            <TransactionFilters
                search={search}
                setSearch={setSearch}
                filterType={filterType}
                setFilterType={setFilterType}
            />

            <TransactionList transactions={filteredTransactions} />
        </main>
    );
}

export default Transaction;