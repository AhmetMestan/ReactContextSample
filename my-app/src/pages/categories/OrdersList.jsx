
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function OrdersList() {
const [orders, setorders] = useState([])
const { enqueueSnackbar } = useSnackbar()


useEffect(() => {
    loadData()
}, [])

const navigate = useNavigate()


const loadData = () => {
    axios.get("https://northwind.vercel.app/api/orders")
    .then(res=>{
        setorders(res.data)
    })
}

const deleteOrder = (item) => {
    var result = window.confirm("Are u sure?")
    if(result){
        axios.delete(`https://northwind.vercel.app/api/orders/${item.id}`)
        .then(res => {
             enqueueSnackbar("Success!!", {
        variant: "success"})
            loadData();
        })
    }
}


const columns = [
{ field: "customerId",
    headerName: "ID",
    flex: 0.1

},
{ field: "orderDate",
    headerName: "Order Date",
    flex: 0.1

},
{ field: "requiredDate",
    headerName: "Required Date",
    flex: 0.1

},
{
    field:"shippedDate",
    headerName:"Shipped Date",
    flex:0.1,
    
}


]

  return <>
   <DataGrid
            rows={orders}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
        />
  
  </>

}

export default OrdersList