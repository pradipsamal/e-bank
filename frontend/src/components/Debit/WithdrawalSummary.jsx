import { useState } from "react";
import "./WithdrawalSummary.css";
import axios from 'axios'

function WithdrawalSummary() {

    let [totalBalance , setTotalBalance] = useState()
    let [todayBalance , setTodayBalance] = useState()
    let [totalCountDebit , setTotalCountDebit] = useState()

    const summary = [
        {
            icon: "💰",
            title: "Available Balance",
            value: `₹${totalBalance}`,
            subtitle: "Savings Account",
        },
        {
            icon: "📤",
            title: "Today's Withdrawal",
            value: `₹${todayBalance}`,
            subtitle: `${totalCountDebit} withdrawals`,
        },
        {
            icon: "📊",
            title: "Daily Limit",
            value: "₹50,000",
            subtitle: "Withdrawal limit",
        },
    ];

    let allUsers = async ()=>{
        let res = await axios.get('http://localhost:3200/allusers')
        let count = 0
        let data = res.data.data
        for(let i = 0 ; i < data.length ; i++){
            count = count + data[i].balance
        }
        setTotalBalance(count)
    }

    let allTransaction = async ()=>{
        let res = await axios.get('http://localhost:3200/allcreditdebit')
        let now = new Date()
        let todayTotalBalance = 0
        let countDebit = 0
        let data = res.data.data

        let today = now.toDateString().split(' ')[2] + ' ' + now.toDateString().split(' ')[1] + ' ' + now.toDateString().split(' ')[3]
        
        for(let i = 0 ; i < data.length ; i++){
            if(today == data[i].date && data[i].type == 'Debit'){
                todayTotalBalance = todayTotalBalance + data[i].amount
                countDebit++
            }
        }
        console.log(todayTotalBalance)
        setTodayBalance(todayTotalBalance)
        setTotalCountDebit(countDebit)
    
    }

    allTransaction()

    allUsers()

    return (
        <section className="withdrawal-summary">

            {summary.map((item) => (
                <div
                    className="withdrawal-summary-card"
                    key={item.title}
                >

                    <div className="withdrawal-summary-icon">
                        {item.icon}
                    </div>

                    <div className="withdrawal-summary-content">

                        <span>{item.title}</span>

                        <strong>{item.value}</strong>

                        <small>{item.subtitle}</small>

                    </div>

                </div>
            ))}

        </section>
    );
}

export default WithdrawalSummary;