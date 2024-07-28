
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { trTR } from '@mui/x-data-grid/locales';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

function CustomersDataGridSample() {
  const [Customers, setCustomers] = useState("")

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/customers")
    .then(res=>{
      setCustomers(res.data)
    })
  
    
  }, [])

  const columns = [
    {
      field: "id",
            headerName: "ID",
            flex: 0.2
    },
    {
      field: "companyName",
            headerName: "Company Name",
            flex: 0.2
    },
    {
      field: "contactName",
            headerName: "Contact Name",
            flex: 0.2
    },
    {
      field: "contactTitle",
            headerName: "Contact Title",
            flex: 0.2
    },
  ]
  
  return<>
   <div style={{ height: 500 }}>
            <DataGrid
                rows={Customers} //DataSource
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                    },
                  }}
                  localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>

  </>
}

export default CustomersDataGridSample