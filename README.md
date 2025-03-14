# User Authentication System

A simple user authentication system built using **Node.js**, **Express.js**, and **MongoDB**.

## Features

- User Registration & Login
- Secure Password Hashing with bcrypt
- JSON Web Token (JWT) Authentication
- Protected Routes with Middleware
- Environment Variables with dotenv
- Error Handling & Validation

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT) & bcrypt

## Installation & Setup

1. **Clone the Repository**  
   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Create `.env` File**  
   Create a `.env` file in the root directory and add the following variables:  
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Run the Server**  
   ```bash
   npm run dev  # Starts server using nodemon
   ```

## API Endpoints

### **User Registration**
```http
POST /api/auth/register
```
**Request Body**:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```
**Response**:
```json
{
  "message": "User registered successfully",
  "token": "your_generated_token"
}
```

### **User Login**
- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "token": "your_generated_token"
  }
  ```

### **Get User Profile**
- **Endpoint**: `GET /api/auth/profile`
- **Headers**:
  ```
  Authorization: Bearer your_jwt_token
  ```
- **Response**:
  ```json
  {
    "id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
  ```

## Project Structure

```
/project-root
│── /config
│   ├── db.js             # MongoDB Connection
│
│── /controllers
│   ├── user.controller.js  # Handles user authentication logic
│
│── /models
│   ├── user.model.js       # Mongoose schema for users
│
│── /routes
│   ├── user.routes.js      # API Routes
│
│── /middleware
│   ├── authMiddleware.js   # JWT Authentication Middleware
│
│── /config
│   ├── db.js               # Database Configuration
│
│── server.js               # Main Express App
│── .env                    # Environment Variables (ignored in .gitignore)
│── package.json            # Project dependencies & scripts
│── .gitignore              # Git Ignore File

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Run the Application**  
   ```bash
   npm run dev  # Starts the server with Nodemon for development
   ```

## How to Contribute

1. **Fork the Repository**
2. **Create a new branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Make Your Changes & Commit**:
   ```bash
   git commit -m "Add feature"
   ```
4. **Push to Your Fork**:
   ```bash
   git push origin feature-name
   ```
5. **Open a Pull Request**

## License

This project is licensed under the **MIT License**.
