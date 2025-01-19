# TaskManager
Design and implement a web-based Collaborative Task Management System that allows multiple users to create, assign, and manage tasks within projects.
Table of Contents
Features
Tools and Technologies
Dependencies
Dev-dependencies
Prerequisites
Installation and setup
Backend API
frontend pages
npm scripts
Useful Links
Contact
Features
User-side features
Signup
Login
Logout
Add tasks
View tasks
Update tasks
Delete tasks
Developer-side features
Toasts for success and error messages
Form validations in frontend and backend
Fully Responsive Navbar
Token based Authentication
Use of 404 page for wrong urls
Relevant redirects
Global user state using Redux
Custom Loaders
Use of layout component for pages
Use of theme colors
No external CSS files needed (made using Tailwind CSS)
Usage of Tooltips
Dynamic document titles
Redirect to previous page after login
Use of various React hooks
Custom hook also used (useFetch)
Routes protection
Middleware for verifying the user in backend
Use of different HTTP status codes for sending responses
Standard pratices followed
Tools and Technologies
HTML
CSS
Javascript
Node.js
Express.js
React
Redux
Mongodb
Dependencies
Following are the major dependencies of the project:

axios
react
react-dom
react-redux
react-router-dom
react-toastify
redux
redux-thunk
bcrypt
cors
dotenv
express
jsonwebtoken
mongoose
material-ui
Dev-dependencies
Following are the major dev-dependencies of the project:

nodemon
concurrently
Prerequisites
Node.js must be installed on the system.
You should have a MongoDB database.
You should have a code editor (preferred: VS Code)
Installation and Setup
Install all the dependencies

npm run install-all
Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

Start the application

npm run dev
Go to http://localhost:4000

Backend API
- POST     /v1/auth/signup
- POST     /v1/auth/login
Frontend pages
- /signup           Signup page
- /login            Login page
- /home             Add new project


npm run dev: Starts both backend and frontend
npm run dev-server: Starts only backend
npm run dev-client: Starts only frontend
npm run install-all: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.
Inside frontend folder:

npm start: Starts frontend in development mode
npm run build: Builds the frontend for production to the build folder
npm test: Launches the test runner in the interactive watch mode
npm run eject: This will remove the single build dependency from the frontend.
Inside backend folder:

npm run debug: Starts backend using nodemon.
npm start: Starts backend without nodemon.






Contact
Email: subhamj13@gmail.com