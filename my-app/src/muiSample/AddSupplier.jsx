import { Stack, TextField, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function AddSupplier() {

    const [CompanyName, setCompanyName] = useState("")
    const [ContactName, setContactName] = useState("")
    const [ContactTitle, setContactTitle] = useState("")

    const add = () => {
        axios.post("https://northwind.vercel.app/api/suppliers", {
            CompanyName,
            ContactName,
            ContactTitle
        }).then(res => {
            alert("Success!")
        })
    }

    return <>

        <Stack spacing={2}>
            <Stack direction="row" justifyContent={"space-between"} spacing={4}>
                <TextField fullWidth id='CompanyName' label="Company Name" variant="outlined" onChange={(e) => setCompanyName(e.target.value)} />
                <TextField fullWidth id='ContactName' label="Contact Name" variant="outlined" onChange={(e) => setContactName(e.target.value)} />
            </Stack>
            <Stack direction="row" justifyContent={"space-between"} spacing={4} sx={{ width: '50%' }}>
                <TextField fullWidth id='ContactTitle' label="Contact Title" variant="outlined" onChange={(e) => setContactTitle(e.target.value)} />
            </Stack>
            <Stack direction={"row"}>
        <Button onClick={add} size="large" variant="contained">Add</Button>
      </Stack>

        </Stack>

    </>

}

export default AddSupplier