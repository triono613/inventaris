<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
     $request->validate([
            "name" => "required",
            "password" => "required|min:6",
            "role" => "in:admin,user"
     ]);


    $user= User::create([
        "name" => $request->name,
        "password" => bcrypt($request->password),
        "role" => $request->role ?? 'user'
    ]);
    return response()->json([
        "message" => "User registered successfully",
        "user" => $user
    ], 201);

   }  

   public function login(Request $request)
   {
    $request->validate([
        "name" => "required",
        "password" => "required"
    ]);

    $user = User::where("name", $request->name)->first();
 

    //  ob_start(); // Start output buffering
    // echo "<pre>";print_r($user);
    // $output = ob_get_clean(); // Get the buffered output

    // dd($user);
    
    // return response()->json([
    //     $request->password,
    //     $user->password
    // ]);
    
    if(!$user || !Hash::check($request->password, $user->password)){
        return respnse()->json([
            "message" => "Invalid credentials"
        ], 401);
     } else {
        $token = $user->createToken('api_token')->plainTextToken;
        return response()->json([
            "message" => "User logged in successfully",
            "access_token" => $token,
            "token_type" => "Bearer"
        ],200 );
     }
    
   

    }
    

}