import { useState } from "react";
import "./DepositSummary.css";
import axios from 'axios'
import { useEffect } from "react";

function DepositSummary() {

    const [totalAmount , setTotalAmount] = useState()
    const [todayTotalCredit , setTodayTotalCredit] = useState()
    const [totalCountCredit , setTotalCountCredit] = useState()

    const summary = [
        {
            icon: "💰",
            title: "Total Customer Balance",
            value: `₹${totalAmount}`,
            subtitle: "Selected account balance",
        },
        {
            icon: "📥",
            title: "Today's Deposits",
            value: `₹${todayTotalCredit}`,
            subtitle: `${totalCountCredit} deposits`,
        },
        {
            icon: "📈",
            title: "Total Deposits",
            value: "₹18,45,680",
            subtitle: "This month",
        },
    ];

    let allUser = async ()=>{
        let res = await axios.get('http://localhost:3200/allusers')
        let count = 0
        for(let user of res.data.data){
            count = count + user.balance
        }
        setTotalAmount(count)
    }

    let allCredit = async ()=>{
        let res = await axios.get('http://localhost:3200/allcreditdebit')
        let data = res.data.data
        let count =  0
        let countCredit = 0
        let now = new Date()
        let today = now.toDateString().split(' ')[2] + ' ' + now.toDateString().split(' ')[1] + ' ' + now.toDateString().split(' ')[3]

        for(let i = 0 ; i < data.length ; i++){
            if(today == data[i].date && data[i].type == 'Credit'){
                count = count + data[i].amount
                countCredit ++
            }
        }
        console.log(count)
        setTodayTotalCredit(count)
        setTotalCountCredit(countCredit)

    }

    useEffect(()=>{
        allCredit()
        allUser()
    } , [])

    return (
        <section className="deposit-summary">

            {summary.map((item) => (
                <div
                    className="deposit-summary-card"
                    key={item.title}
                >

                    <div className="deposit-summary-icon">
                        {item.icon}
                    </div>

                    <div className="deposit-summary-content">

                        <span>
                            {item.title}
                        </span>

                        <strong>
                            {item.value}
                        </strong>

                        <small>
                            {item.subtitle}
                        </small>

                    </div>

                </div>
            ))}

        </section>
    );
}

export default DepositSummary;