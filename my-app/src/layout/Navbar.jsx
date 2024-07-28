import { AppBar, Stack } from '@mui/material'
import { Typography } from '@mui/material'

import { Link } from 'react-router-dom'

function Navbar() {



  return <>
    <AppBar position="static">
      <Stack direction="row" justifyContent="space-evenly" sx={{ padding: "1%" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/products/list"><Typography variant="h5">Products</Typography></Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/products/add"><Typography variant="h5">Add Products</Typography></Link>
        

      </Stack>
    </AppBar>
  </>
}

export default Navbar