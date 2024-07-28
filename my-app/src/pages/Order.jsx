import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Order() {

    const [orders, setorders] = useState([])

    useEffect(() => {
        
        axios.get("https://northwind.vercel.app/api/orders")
        .then(res => {
            setorders(res.data)
        })
    
    }, [])

  return <>
  
  {
       <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Customer Id</th>
                <th>Employee Id</th>
                <th>Order Date</th>
                <th>Ship Name</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.customerId}</td>
                    <td>{item.employeeId}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.shipName}</td>

                </tr>)
            }
        </tbody>
    </table>
    }

  </>
}

export default Order