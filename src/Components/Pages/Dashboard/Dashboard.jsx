import React, { useEffect, useState } from 'react'
import DashboardCard from './Components/DashboardCard'
import DashboardEmpty from './Components/DashboardEmpty'

const Dashboard = () => {

    const [dashBoardData, setdashBoardData] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const token = JSON.parse(sessionStorage.getItem("token"));
            const cbid = JSON.parse(sessionStorage.getItem("cbid"))

            const res = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}`, {
                method: "GET",
                headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` }

            })

            const data = await res.json()
            setdashBoardData(data)

            console.log(data);
        }

        fetchData()
    }, [])


    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>

            <section >
                {dashBoardData.length && dashBoardData?.map((dash) => (
                    <DashboardCard key={dash.key} orderData={dash} />
                ))}

            </section>

            <section>

                {!dashBoardData.length && <DashboardEmpty />}

            </section>

        </main>
    )
}

export default Dashboard