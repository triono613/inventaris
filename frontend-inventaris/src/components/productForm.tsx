
import { useNavigate } from "react-router-dom";
import React, { useState, useCallback, FormEvent } from 'react';
import axiosClient from "./axios/axiosClient";
import axios from "axios";

export default function ProductForm( ) {
   const [formData, setFormData] = useState({
    name: '',
    sku: '',
    quantity: 0,
    price: 0,
   });
 
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [success, setSuccess] = useState<string>("");
 const navigate = useNavigate();
 const API_TOKEN = "7|CcBUcve1YgPzgV0rTb6Es1fk4ZQ6DtLeH9mZACelc8ca6224";


const handleSubmit =  async (e: FormEvent)  => {
      e.preventDefault();
     
      await axiosClient.get("/sanctum/csrf-cookie");

       const payload = {
          name: formData.name,
          sku: formData.sku,
          quantity: Number(formData.quantity),
          price: Number(formData.price),
        };

    try {

    const res = await axiosClient.post( 'http://localhost:8000/api/products',
        payload,
        {
          headers: {
             Authorization: 'Bearer' + ' ' + API_TOKEN,
          },
        }
      );

       if(res.status === 201){
         setSuccess("data berhasil disimpan");
       }

       setTimeout(() => {
        navigate('/');
      }, 1500);
    
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          const statusCode = err.response.status;
          console.log('err.response.data statusCode= ', statusCode)
          console.log('err.response.data= ',err.response.data.message);
          setError(err.response.data.message);
        } else {
          console.error('Axios error without response:', err.message);
        }
      } else {
        console.error('Unexpected error:', err);
      }

    } finally {
        setLoading(false);
    }



   
    
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
         {
             error && (
                <div className="alert alert-danger" role="alert"> { error }</div>
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
                />

        </div>
        <div className="mb-3">
            <label className="form-label">SKU</label>
            <input 
                type="text"
                className="form-control"
                value={ formData.sku }
                onChange={ (e) => setFormData({ ...formData, sku: e.target.value}) }
                />
        </div>
         <div className="mb-3">
            <label className="form-label">QUANTITY</label>
            <input 
                type="text"
                className="form-control"
                value={ formData.quantity }
                onChange={ (e) => setFormData({ ...formData, quantity: Number(e.target.value) }) }
                />
        </div>
        <div className="mb-3">
            <label className="form-label">PRICE</label>
            <input 
                type="text"
                className="form-control"
                value={ formData.price }
                onChange={ (e) => setFormData({ ...formData, price: Number(e.target.value) }) }
                />
        </div>
        <button className="btn btn-primary" >
            { loading ? 'Simpan data...' : 'Simpan' } </button> &nbsp; 
         <button onClick={ handleGetBack } className="btn btn-primary" >Kembali </button>
        </form>
        
        
</div>        
    )







}