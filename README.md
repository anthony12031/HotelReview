# HotelReview
HotelReview is a web application designed to provide users with detailed reviews and ratings of hotels. Whether you're planning a vacation or a business trip, HotelReview offers insights from previous guests, helping you make informed decisions about your stay. This project leverages modern web technologies to deliver a seamless and intuitive user experience.

Features
User Authentication: Secure user login and registration.
Review Submission: Users can write and submit reviews for hotels.
Rating System: A comprehensive rating system that allows users to rate hotels based on various criteria.
Search and Filter: Easily search for hotels and filter results based on ratings, location, and more.
Responsive Design: Optimized for desktop and mobile devices.
Technologies Used
Frontend: React, Redux, TypeScript, CSS (with TailwindCSS)
Backend: Node.js, Express, PostgreSQL
Authentication: JSON Web Tokens (JWT)
Hosting: AWS, Docker
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/anthony12031/HotelReview.git
cd HotelReview
Install dependencies:

bash
Copy code
## Frontend
```
cd frontend
npm install
```

## Backend
```
cd ../backend
npm install
```
Set up environment variables:

Create a .env file in the root directory of both the frontend and backend, and add the necessary environment variables. For example:

env
Copy code
### .env (Backend)
```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```
Run the application:

bash
Copy code
### Start the backend server
```
cd backend
npm start
```

### Start the frontend
```
cd ../frontend
npm start
The application will be available at http://localhost:3000.
```

## Usage
- Sign Up: Create an account to start reviewing hotels.
- Log In: Access your account to write reviews and rate hotels.
- Search Hotels: Use the search bar to find hotels based on your preferences.
- Write Reviews: Share your experience by writing a detailed review.
- Rate Hotels: Rate hotels based on different criteria such as cleanliness, location, service, etc.

  
## Contributing
We welcome contributions from the community. To contribute:

## Fork the repository.
Create a new branch with a descriptive name.
Make your changes and commit them with clear messages.
Push your changes to your fork.
Submit a pull request with a detailed explanation of your changes.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For questions or feedback, please reach out to Anthony Jason Vargas Sepúlveda.
