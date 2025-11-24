import { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";



export default function Dashboard() {
const [products, setProducts] = useState<Product[]>([]);

const loadProducts = async () => {
    const res = await fetch('http://localhost:8000/api/products');
    const data = await res.json();
    setProducts(data);
};

useEffect(() => {
   loadProducts();

},[]);

return (
    <div className="container mt-5">
        
        <div className="d-flex justify-content-between align-items-center">
        <h2>Dashboard</h2>
             <Link to="/products/create" className="btn btn-primary"> Tambah Poduk</Link>
        </div>
        
         <ProductTable products={products} />
        </div>
)


}