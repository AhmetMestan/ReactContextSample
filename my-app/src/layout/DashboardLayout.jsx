import React from 'react'
import Navbar from './Navbar'
import footer from './Footer'

function DashboardLayout({children}) {
  return <>
  <Navbar />
        <div style={{padding:"3%"}}>
            {children}
        </div>
        <footer/>
  
  </>
}

export default DashboardLayout