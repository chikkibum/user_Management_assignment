# Backend API Service

A TypeScript-based Express.js backend service with MongoDB integration, authentication, and user management.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- npm or yarn package manager

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following variables:

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Project Structure

```
├── src/
│ ├── config/
│ │ └── db.ts
│ ├── controllers/
│ │ ├── authController.ts
│ │ └── userController.ts
│ ├── middleware/
│ │ └── authMiddleware.ts
│ ├── models/
│ │ └── User.ts
│ ├── routes/
│ │ ├── authRoutes.ts
│ │ └── userRoutes.ts
│ └── index.ts
├── package.json
├── tsconfig.json
└── .env
```
## Video Demo

[demo.webm](https://github.com/user-attachments/assets/a0473656-491e-45da-b32d-af20bf062e3f)

Click the image above to watch a demonstration of the project features and functionality.


## Development

To start the development server:

```bash
npm run dev
```
### API Endpoints
```
Authentication
POST /api/auth/signup
```
Register a new user
Body:


```json
{ 
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123" 
}
```

### POST /api/auth/login

Login a user
Body:
```json
{ 
  "email": "john@example.com",
  "password": "password123" 
}
```
### User Management (Protected Routes)
POST /api/users/create

Create a new user (requires admin or agent privileges)
Body:
```json
Copy code
{ 
  "name": "Jane Doe", 
  "email": "jane@example.com", 
  "password": "password123", 
  "role": "user", 
  "credits": 100 
}
```
### POST /api/users/credits

Add credits to a user
Body:
```json

{ 
  "userId": "user_id_here", 
  "credits": 50 
}
```

User Roles
The system supports three user roles:

admin: Full system access
agent: Can create users and manage credits
user: Basic access
Authentication
Protected routes require a JWT token in the Authorization header:

http
```
Authorization: Bearer <your_jwt_token>
Error Handling
The API returns appropriate HTTP status codes and error messages in JSON format. For example:
