import { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import { Product } from "../types/Product";



export default function Dashboard() {
const [products, setProducts] = useState<Product[]>([]);

const fetchProducts = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/products');
    const data = await res.json();
    setProducts(data);
};

useEffect(() => {
   fetchProducts();

},[]);

return (
    <div className="container mt-5">
        <h2>Dashboard</h2>
        <ProductTable products={products} />
        </div>
)


}