import { Route, Routes,Link } from "react-router-dom";
import List from "./pages/categories/List";
import Update from "./pages/categories/Update";
import OrdersList from "./pages/categories/OrdersList";
import AddProduct from "./pages/categories/Products/AddProduct";
import DashboardLayout from "./layout/DashboardLayout";
import ProductList from "./pages/categories/Products/ProductList";



function App(){


  return <>

<DashboardLayout>
<Routes>
    <Route path="/categories"element={<List/>}/>
    <Route path="/categories/update/:id"element={<Update/>}/>
    <Route path="/orders"element={<OrdersList/>}/>
    <Route path="/products/add"element={<AddProduct/>}/>
    <Route path="/products/list"element={<ProductList/>}/>
    

  </Routes>

</DashboardLayout>
  
  </>
}

export default App;
