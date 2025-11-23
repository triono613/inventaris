<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Models\Product;

class ProductController extends Controller
{
 
    public function index()
    {
        return Product::all();
    }

 
    public function store(Request $request)
    {
        try {
               $validatedData =  $request->validate([
                   "name" => "required|string|max:255",
                   "sku" => "required|string|unique:products",
                   "quantity" => "required|integer|min:0",
                   "price" => "required|numeric|min:0"
               ]);
               
                // $poduct = Product::create($request->all());
                $product = Product::create($validatedData);
//         dd($request->all());
       
                return response()->json([
                     'message' => 'Product created successfully',
                     'data' => $product
                 ], 201);

        } catch (ValidationException $e) {
           return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }
    }


    public function show(string $id)
    {
        return Product::findOrFail($id);
    }

  
    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);
        $request->validate([
            "name" => "required|string|max:255",
            "sku" => "required|string|unique:products,sku," . $id,
            "quantity" => "required|integer|min:0",
            "price" => "required|numeric|min:0"
        ]);

        $product->update($request->all());
        return response()->json($product, 200);
    }

    
}
