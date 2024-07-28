import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../api/axiosInstance'

function AddProduct() {

const [formData, setformData] = useState({
    name : "",
    unitsInStock : "",
    unitPrice : "",
    quantityPerUnit : ""

})

const navigate = useNavigate()

const handleChange = (e) => {
    setformData ({
        ...formData,
        [e.target.name]: e.target.value
    }) 
}


const handleSubmit = (e) => {
    e.preventDefault()
    axiosInstance.post("products",formData)
    .then(res => {
        navigate("/products/list")
    })
}

  return <>

  <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="">Product Name</label>
        <input required type = "text" name ="name" onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="">Units In Stock</label>
        <input required type = "text" name ="unitsInStock" onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="">Units Price</label>
        <input required type = "text" name ="unitPrice" onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor="">Quanntity Per Unit</label>
        <input required type = "text" name ="quantityPerUnit" onChange={handleChange}></input>
    </div>
    <div>
        <button type='submit'>Add</button>
    </div>

  </form>

  </>
}

export default AddProduct