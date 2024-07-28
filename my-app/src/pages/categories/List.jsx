import { Button } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function List() {
const [categories, setcategories] = useState([])
const { enqueueSnackbar } = useSnackbar()

useEffect(() => {
    loadData()
}, [])

const navigate = useNavigate()


const loadData = () => {
    axios.get("https://northwind.vercel.app/api/categories")
    .then(res=>{
        setcategories(res.data)
    })
}

const deleteCustomer = (item) => {
    var result = window.confirm("Are u sure?")
    if(result){
        axios.delete(`https://northwind.vercel.app/api/categories/${item.id}`)
        .then(res => {
             enqueueSnackbar("Success!!", {
        variant: "success"})
            loadData();
        })
    }
}


const columns = [
{ field: "id",
    headerName: "ID",
    flex: 0.1

},
{ field: "name",
    headerName: "Category Name",
    flex: 0.1

},
{ field: "description",
    headerName: "Category Description",
    flex: 0.1

},
{
    field:"update",
    headerName:"Update",
    flex:0.1,
    renderCell:(data) => <Button onClick={() => navigate ("/categories/Update/" + data.row.id )} color="inherit" variant="contained">Update</Button>
},
{
    field:"delete",
    headerName:"Delete",
    flex:0.1,
    renderCell:(data) => <Button onClick={() => deleteCustomer(data.row)} color="error" variant="contained">Delete</Button>
}


]

  return <>
   <DataGrid
            rows={categories}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
        />
  
  </>

}

export default List