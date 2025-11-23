import { Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';
// import { ProductForm } from './productForm';


interface Props {
  products: Product[];
}

export default function ProductTable({ products}: Props){
 const navigate = useNavigate();

  const handleGoToForm = () => {
    // Perform some logic here if needed
    navigate('/productForm');
  };

 return (
    
    <table className='table table-bordered mt-4'>
      <thead>
        <tr>
       <td colSpan={4}>      
        <button type="button" className="btn btn-primary" onClick={ handleGoToForm }>tambah Product</button>
       </td>

        </tr>
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