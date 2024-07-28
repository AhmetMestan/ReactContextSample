import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ProductList() {
const [products, setproducts] = useState([])
const { enqueueSnackbar } = useSnackbar()

useEffect(() => {
    loadData()
}, [])

const navigate = useNavigate()


const loadData = () => {
    axios.get("https://northwind.vercel.app/api/products")
    .then(res=>{
        setproducts(res.data)
    })
}



const columns = [
{ field: "name",
    headerName: "Product Name",
    flex: 0.1

},
{ field: "unitsInStock",
    headerName: "Units In Stock",
    flex: 0.1

},
{ field: "unitPrice",
    headerName: "Category Unit Price",
    flex: 0.1

},
{ field: "quantityPerUnit",
    headerName: "Quantity Per Unit",
    flex: 0.1

}



]

  return <>
   <DataGrid
            rows={products}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
        />
  
  </>

}

export default ProductList