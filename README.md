Cara menjalankan BACKEND :
1. masuk ke folder backend-inventaris kemudian ketikan 'composer install'
2. buat database dengan nama inventaris_db, sesuaikan user dan password DB, kemudian ketikan 'php artisan migrate'
3. jalankan Backend dengan perintah 'php artisan serve'
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
2. pada file src/components/productForm.tsx , pada "const API_TOKEN = '' " inputkan access_token yang didapat pada endpoint backend http://127.0.0.1:8000/api/login
3. 
