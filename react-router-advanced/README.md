# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

TASK 2. Advanced Routing in React with React Router
mandatory
Objective: Implement advanced routing techniques in a React application using React Router. This task focuses on creating nested routes, protected routes that require authentication, and dynamic routing for handling variable paths.

Task Description:
Develop your skills in managing complex routing scenarios in React applications. This will involve setting up different types of routes using React Router to enhance the structure, security, and flexibility of your application.

Step 1: Set Up React Router in the Project
Project Setup:
Ensure your React project is ready for routing:
    npm create vite@latest react-router-advanced -- --template react
    cd react-router-advanced
    npm install react-router-dom
React Router Integration:
Integrate React Router in your application’s main component (App.jsx), setting up a basic router configuration.
Step 2: Implement Nested and Dynamic Routing
Nested Routes:

Create nested routes within the Profile component to manage sub-sections like ProfileDetails and ProfileSettings.
Dynamic Routing:

Implement dynamic routing to handle user-generated content, such as user profiles or blog posts with variable URLs.
Example of dynamic routing for a blog post:
Step 3: Create Protected Routes
Protected Route Setup:
Build a protected route component that requires users to be authenticated before accessing certain pages like Profile.
Use a simple authentication check to simulate user login status.
Step 4: Testing and Documentation
Functional Testing:
Test all routes thoroughly to ensure they work as expected, including nested, dynamic, and protected routes.
Verify that navigation between routes is seamless and that protected routes redirect unauthenticated users correctly.
