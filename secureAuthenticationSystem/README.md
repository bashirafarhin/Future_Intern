## 🔐 Task 1 – Secure User Authentication

### 📌 Task Description
Implement a user authentication system with secure login and registration functionality. Users should be able to sign up for an account, log in securely, and access protected routes only after successful authentication. Use standard mechanisms to handle password hashing, session management, and user role-based access control. Protected routes should restrict unauthorized access to sensitive functionalities.

### 🚀 Deployed Project
[Live Demo](https://your-app-link.com)

### ✅ Work Done
Developed a **secure session-based authentication system** with a role-based access model using React and Express. Users can register, log in, and access pages based on their assigned roles. Admin users have access to dedicated admin routes.

### ✨ Features Implemented
- 📝 Users can **register** with email and password
- 🔐 Users can **log in** with secure **session-based authentication**
- 🔑 **Role-based access control** implemented (e.g., `reader`, `admin`)
- 🔄 **Redirect after login** based on user role:
  - `reader` → `/home`
  - `admin` → `/admin-dashboard`
- 🚫 Unauthorized users are **blocked from protected and admin routes**
- ✅ Authenticated users can access nested protected pages like `session-auth` and `token-auth`
- 👮 Admin users can view a list of registered users and delete users by email
- 🧹 Logout functionality clears the session and redirects to login
- ⚠️ Backend includes **input validation** using `express-validator`
- 🛡️ Passwords are hashed securely with `bcrypt`
- ⚙️ Admin credentials (`admin@admin.com` / `admin`) are seeded if not present

### 🧰 Tech Stack Used

#### 🖥️ Frontend
- React  
- React Router DOM  
- Axios  
- Tailwind CSS  

#### 🔧 Backend
- Node.js  
- Express  
- express-session  
- express-validator  
- bcrypt

### 🔑 Admin Credentials
> Use the following credentials to log in as an admin:
Email: admin@admin.com
Password: admin