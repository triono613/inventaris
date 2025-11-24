Cara menjalankan BACKEND :
1. masuk ke folder backend-inventaris kemudian ketikan 'composer install'
2. buat database dengan nama inventaris_db, sesuaikan user dan password DB, kemudian ketikan 'php artisan migrate'
3. jalankan BackEnd dengan perintah 'php artisan serve'
4. bila sudah berjalan ada beberapa endpoint yg ada pada banckend ini
   1. REGISTER : http://127.0.0.1:8000/api/register (metode HTTP POST)
     {
       "name": "admin",
       "password": "123456",
        "role": "user" 
     }
   2. LOGIN : http://127.0.0.1:8000/api/login (metode HTTP POST)
     {
      "name" : "admin",
      "password" : "123456"
     }
   3. TAMBAH PRODUCT : http://127.0.0.1:8000/api/products (metode HTTP POST)
      {
       "name": "spidol",
       "sku": "SKU003",
       "quantity": 10,
        "price": 5000
       }
   5. EDIT PRODUCT : http://127.0.0.1:8000/api/products/{id}  (metode HTTP PUT)
       {
        "name": "tempat pensil",
        "sku": "SKU001",
        "quantity": 5,
        "price": "25000"
        }
   6. LIHAT SEMUA PRODUCT : http://127.0.0.1:8000/api/products (metode HTTP GET)
  


Cara menjalankan FRONTEND :
1. masuk ke folder frontend-inventaris kemudian ketikan 'npm install'
2. pada file src/components/productForm.tsx , pada "const API_TOKEN = '' " inputkan access_token yang didapat pada endpoint BackEnd http://127.0.0.1:8000/api/login
3. jalankan FrontEnd dengan perintah 'npm start'

Cara mendapatkan Key API/Token :
1. buka postman dan lakukan register pada endpoint http://127.0.0.1:8000/api/register ,
   {
    "name": "admin",
    "password": "123456",
    "role": "user"
} bila berhasil akan mendapatkan json seperti berikut : <img width="794" height="607" alt="image" src="https://github.com/user-attachments/assets/dda72929-73e1-4163-a923-f6d5be3355ae" />

2. setelah berhasil melakukan register , kemudian login pada endpoint http://127.0.0.1:8000/api/login
   {
    "name" : "admin",
    "password" : "123456"
   }
   bila berhasil akan mendapatakan json seperti berikut <img width="794" height="553" alt="image" src="https://github.com/user-attachments/assets/0f183a91-c628-42e2-ad4f-695a8e6feed0" />

