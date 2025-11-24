
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback, FormEvent } from 'react';
import axiosClient from "./axios/axiosClient";


interface ProductFormProps {
    onCreated: () => void;
}


export default function ProductForm( ) {
   const [formData, setFormData] = useState({
    name: '',
    sku: '',
    quantity: 0,
    price: 0,
   });
 
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState<string | null>(null);
 const [success, setSuccess] = useState<string>("");
 const navigate = useNavigate();
 const API_TOKEN = "7|CcBUcve1YgPzgV0rTb6Es1fk4ZQ6DtLeH9mZACelc8ca6224";


const handleSubmit =  async (e: FormEvent)  => {
      e.preventDefault();
     
      await axiosClient.get("/sanctum/csrf-cookie");

     
       
    //  const res = await fetch('http://127.0.0.1:8000/api/products', {
    //        method: 'POST',
    //        credentials: "include",
    //        headers: {
    //         "content-type" : "application/json",
    //         // Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    //         Authorization: 'Bearer' + ' ' + API_TOKEN,
    //        },
    //        body: JSON.stringify(formData),
    //   });

    const res = await axiosClient.post( 'http://localhost:8000/api/products',
        {
          name: formData.name,
          sku: formData.sku,
          quantity: Number(formData.quantity),
          price: Number(formData.price),
        },
        {
          headers: {
             Authorization: 'Bearer' + ' ' + API_TOKEN,
          },
        }
      );

      console.log('res= ', res);

      if(res.status === 201){
        //  setFormData({ name: '', sku: '', quantity: 0, price: 0 });
         setSuccess("data berhasil disimpan");
      }

       setTimeout(() => {
        navigate('/');
    }, 1500);
    
    
    };
  
   
      const handleGetBack = () => {
        navigate('/');
      };


    return (
        <div className="container w-25 mt-5">
        
         <h2>Tambah Product</h2>
         <br></br>
         {
            success && (
                <div className="alert alert-success" role="alert"> { success }</div>
            )
         }
         <form onSubmit={handleSubmit} className="mb-4">
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