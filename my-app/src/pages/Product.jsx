import React, {useEffect,useState} from 'react'

function Product() {

    const [products, setproducts] = useState([])

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])


  return <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Units In Stock</th>
            </tr>
        </thead>
        <tbody>
            {
              products &&  products.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>

                </tr>)
            }
        </tbody>
    </table>
    </>
}

export default Product