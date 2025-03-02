# IllPeople Clone - Front End & Back End

This project is a clone of the [IllPeople Music](https://illpeoplemusic.com/beats) website, built using **Angular** for the front end and **Node.js** with **MongoDB** for the back end. The front end fetches beats data from a provided API, and the back end provides user authentication and profile management features.

---

## Features

### Front End (Angular)
- Fetches beats data from the provided API: `https://api-server.illpeoplemusic.com/api/v2/playlist/trending`.
- Displays beats in a responsive and user-friendly UI.
- Uses Angular components, services, and modules for a clean and modular codebase.

### Back End (Node.js & MongoDB)
- **User Registration**: Create a new user using email and password.
- **User Login**: Authenticate users and generate a JWT token.
- **Protected Routes**:
  - Get user profile data (full name, address, profile picture).
  - Update user data.
- Uses **JWT (JSON Web Tokens)** for secure authentication.

---

## Technologies Used

### Front End
- **Angular**: Front-end framework.
- **HTML/CSS**: For structuring and styling the UI.
- **RxJS**: For handling API requests and responses.
- **Angular Material** (optional): For pre-built UI components.

### Back End
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT**: For user authentication and authorization.
- **Bcrypt**: For hashing passwords.

---

## Setup Instructions

### Prerequisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **Angular CLI**: Install globally using `npm install -g @angular/cli`.
- **MongoDB**: Install locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

### Front End (Angular)
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend

2. Install dependencies:
    npm install

3. Run the application:
    ng serve

4. Open your browser and visit:
    http://localhost:4200

### Back End (Node.js & MongoDB)
1. Navigate to the backend folder:
    cd backend

2. Install dependencies:
    npm install

3. Start the server:
    node server.js / npm run dev
    The server will run on:
        http://localhost:5000

### API Endpoints
1. Authentication
    1.1 Register: POST /api/auth/register

        Request Body:
            {
              "email": "test@example.com",
              "password": "password123"
            }

    1.2. Login: POST /api/auth/login

        Request Body:
            {
              "email": "test@example.com",
              "password": "password123"
            }
        Note: you will recieve a JWT token in this, copy that

2. Profile
    2.1 Get Profile: GET /api/profile
        Headers:
            Authorization: Bearer <JWT_TOKEN>

    2.2 Update Profile: PUT /api/profile
        Headers:
            Authorization: Bearer <JWT_TOKEN>
        Request Body:
        {
          "fullName": "Lavanya",
          "address": "zirakpur, punjab",
          "profilePicture": "http://example.com/profile.jpg"
        }
        
### Folder Structure
1. Front End

    illPeopleAuthBackend/
    ├── src/
    │   ├── app/
    │   │   ├── components/       # Angular components
    │   │   ├── services/         # Angular services
    │   ├── assets/               # Static assets
    │   └── styles.css            # Global styles
    ├── angular.json              # Angular configuration
    └── package.json              # Frontend dependencies

2. Back End
    illPeopleAuthBackend/
    ├── config/
    │   └── db.js                   # MongoDB connection
    ├── controllers/
    │   ├── authController.js       # Authentication logic
    │   └── userController.js       # Profile logic
    ├── middleware/
    │   └── auth.js                 # JWT authentication middleware
    ├── models/
    │   └── User.js                 # User schema
    ├── routes/
    │   ├── auth.js                 # Authentication routes
    │   └── users.js                # Profile routes
    ├── server.js                   # Backend entry point
    └── package.json                # Backend dependencies


---

### Key Features of the README
1. **Clear Structure**: Divided into sections like Features, Technologies, Setup Instructions, API Endpoints, and Folder Structure.
2. **Step-by-Step Instructions**: Easy-to-follow setup guide for both frontend and backend.
3. **API Documentation**: Clearly lists all API endpoints with examples.
4. **Visuals**: Placeholder for screenshots to make the README more engaging.
5. **Professional Tone**: Suitable for sharing with evaluators or potential employers.

---
