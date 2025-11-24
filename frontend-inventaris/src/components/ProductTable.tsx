import { Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';
// import { ProductForm } from './productForm';


interface Props {
  products: Product[];
}

export default function ProductTable({ products}: Props){
 const navigate = useNavigate();

 return (
    
    <table className='table table-bordered mt-4'>
      <thead>
  
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
      </thead>
        
        <tbody>
        {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
          </tr>
           ))}
        </tbody>

    </table>
 )
}