import { useState } from "react";
import { useNavigate } from "react-router-dom";



interface ProductFormProps {
    onCreated: () => void;
}


export default function ProductForm({ onCreated }: ProductFormProps ) {
   const [formData, setFormData] = useState({
    name: '',
    sku: '',
    quantity: 0,
    price: 0,
   });

 const navigate = useNavigate();


const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
     
       
      await fetch('http://127.0.0.1:8000/api/products', {
           method: 'POST',
           headers: {
            "content-type" : "application/json",
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`
           },
           body: JSON.stringify(formData),
      });

      setFormData({ name: '', sku: '', quantity: 0, price: 0 });
      onCreated();
    }

  
    
      const handleGetBack = () => {
        navigate('/');
      };


    return (
        <div className="container w-25 mt-5">
        <form onSubmit={handleSubmit} className="mb-4">
         <h2>Tambah Product</h2>
         <br></br>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                value={ formData.name }
                onChange={ (e) => setFormData({ ...formData, name: e.target.value}) }
                required
                />

        </div>
        <div className="mb-3">
            <label className="form-label">SKU</label>
            <input 
                type="text"
                className="form-control"
                value={ formData.sku }
                onChange={ (e) => setFormData({ ...formData, sku: e.target.value}) }
                required
                />
        </div>
         <div className="mb-3">
            <label className="form-label">QUANTITY</label>
            <input 
                type="text"
                className="form-control"
                value={ formData.quantity }
                onChange={ (e) => setFormData({ ...formData, quantity: Number(e.target.value) }) }
                required
                />
        </div>
        <div className="mb-3">
            <label className="form-label">PRICE</label>
            <input 
                type="text"
                className="form-control"
                value={ formData.price }
                onChange={ (e) => setFormData({ ...formData, price: Number(e.target.value) }) }
                required
                />
        </div>
        <button className="btn btn-primary" >Simpan </button> &nbsp; 
         <button onClick={ handleGetBack } className="btn btn-primary" >Kembali </button>
        </form>
        
        
</div>        
    )







}