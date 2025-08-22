# 📘 Soal Latihan React Router DOM – Coffee Kiosk

## A. Technology yang digunakan
1. **Frontend**:  
   - React.js  
   - React Router DOM v6  
   - Axios (untuk fetch data dari API)  
   - Tailwind CSS (opsional styling)

2. **Backend (mock/placeholder)**:  
   - JSON Server (atau API dummy lain, misalnya `jsonplaceholder.typicode.com`)  

---

## B. Summary – Coffee Kiosk
Kamu diminta membuat aplikasi sederhana bernama **Coffee Kiosk**.  
Aplikasi ini memiliki daftar menu kopi dan daftar pengguna (users).  

User bisa:
- melihat list kopi,  
- melihat detail kopi (by ID),  
- menambahkan kopi baru,  
- mengupdate kopi,  
- menghapus kopi.  

Hal yang sama berlaku untuk **users**.  

---

## C. Task – CRUD & Get by ID
### Coffee
- Create Coffee  
- Read (list all coffees)  
- Get Coffee by ID  
- Update Coffee  
- Delete Coffee  

### User
- Create User  
- Read (list all users)  
- Get User by ID  
- Update User  
- Delete User  

---

## D. Endpoint API (contoh JSON Server)
Base URL: `http://localhost:3000`

### Coffees
- `GET /coffees` → get all coffees  
- `GET /coffees/:id` → get coffee by id  
- `POST /coffees` → create coffee  
- `PUT /coffees/:id` → update coffee  
- `DELETE /coffees/:id` → delete coffee  

### Users
- `GET /users` → get all users  
- `GET /users/:id` → get user by id  
- `POST /users` → create user  
- `PUT /users/:id` → update user  
- `DELETE /users/:id` → delete user  

---

## E. Pages yang harus ada
1. **Home Page** (`/`)  
   - Welcome page sederhana.  

2. **Coffees Page** (`/coffees`)  
   - Menampilkan list coffee.  
   - Tombol **Add Coffee**.  
   - Setiap item ada tombol **View**, **Edit**, **Delete**.  

3. **Users Page** (`/users`)  
   - Menampilkan list users.  
   - Tombol **Add User**.  
   - Setiap item ada tombol **View**, **Edit**, **Delete**.  

4. **Get Coffee by ID Page** (`/coffees/:id`)  
   - Menampilkan detail 1 coffee berdasarkan ID.  

5. **Get User by ID Page** (`/users/:id`)  
   - Menampilkan detail 1 user berdasarkan ID.  

6. **Update Coffee Page** (`/coffees/:id/edit`)  
   - Form untuk edit coffee.  

7. **Update User Page** (`/users/:id/edit`)  
   - Form untuk edit user.  

---

## 📌 Instruksi Soal
- Buatlah routing menggunakan **React Router DOM v6** sesuai halaman di atas.  
- Gunakan **Axios** untuk fetch data dari API.  
- Implementasikan fitur CRUD untuk **Coffees** dan **Users**.  
- Pastikan halaman **Get by ID** dan **Update** berfungsi sesuai endpoint.  
