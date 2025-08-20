# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

TASK 0. Implementing Form Handling in React with Controlled Components and Formik

Objective: Learn to manage form data in React using controlled components and then transition to using Formik for more complex form handling, focusing on a practical application involving a specific API.

Task Description:
This task will guide you through building and managing a user registration form in React. First, using controlled components to handle form states manually, and then leveraging Formik for advanced form handling capabilities. You will work with a mock API endpoint to simulate user registration.

Step 1: Set Up the React Project
Project Setup:

Create a new React project:

npm create vite@latest form-handling-react -- --template react
cd form-handling-react
Step 2: Create a User Registration Form Using Controlled Components
Build a Controlled Form:
Develop a RegistrationForm component under src/components folder that includes fields for username, email, and password.
Manage form states using React’s useState to handle values for each input field.
Add basic validation logic to check that no fields are left empty before submission.
Step 3: Transition to Formik for Form Handling
Integrate Formik:

Install Formik:

npm install formik
Refactor the RegistrationForm to use Formik, taking advantage of Formik’s built-in state management and validation capabilities. The new component should be named formikForm.js
Implement the same form using Formik’s Form, Field, and ErrorMessage components, including validation with Formik’s Yup.

TASK 1. Advanced Data Handling with React Query
Objective: Implement advanced data fetching and management in a React application using React Query, focusing on handling API interactions efficiently and improving user interface responsiveness.

Task Description:
This task involves integrating React Query into a React project to fetch, cache, and update data from a public API. You’ll build a component that handles these data operations smoothly, demonstrating the capabilities of React Query in optimizing data interactions in React applications.

API Details:
API Usage:
For this task, use the JSONPlaceholder API to fetch posts. This simple, free online REST API is perfect for practice and demonstration purposes.
API Endpoint for fetching posts:
    https://jsonplaceholder.typicode.com/posts
Step 1: Set Up React Query in the Project
Project Setup:

Ensure your React project is prepared for fetching data:
npm create vite@latest react-query-demo -- --template react
cd react-query-demo
npm install react-query
React Query Integration:

Set up React Query by integrating it into your application’s main component (e.g., App.js) using the QueryClient and QueryClientProvider.

Step 2: Create a Component to Fetch Data
Data Fetching Component:
Develop a component named PostsComponent that uses React Query to fetch data from the JSONPlaceholder API.
Use the useQuery hook to manage the fetching process, handle loading states, error handling, and data caching.
Step 3: Implement Features for Caching and Updating Data
Advanced React Query Features:
Demonstrate how React Query handles caching by navigating away and returning to the PostsComponent, observing that data loads from cache if recently fetched.
Implement a button or interaction that triggers a refetch of the data to show how React Query can update data on demand.
Step 4: Testing and Evaluation
Ensure Robust Functionality:
Test the application to ensure that data fetching, caching, and updating work as expected. Use tools like React Developer Tools to inspect the React Query cache and watch how it behaves across component mounts and unmounts.
Check the network requests in browser dev tools to confirm that caching effectively reduces the number of API calls.

TASK 2. Advanced Routing in React with React Router
Objective: Implement advanced routing techniques in a React application using React Router. This task focuses on creating nested routes, protected routes that require authentication, and dynamic routing for handling variable paths.

Task Description:
Develop your skills in managing complex routing scenarios in React applications. This will involve setting up different types of routes using React Router to enhance the structure, security, and flexibility of your application.

Step 1: Set Up React Router in the Project
Project Setup:
Ensure your React project is ready for routing:

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

TASK 3. Implementing and Testing a Todo List Component in React
Objective: Learn to create, implement, and test a fully functional Todo List component in React using Jest and React Testing Library. This task focuses on hands-on coding and testing to ensure the component operates correctly under various scenarios.

Create a new react app named react-todo.

Task Description:
You will build a Todo List component that allows users to add, delete, and toggle the completion status of todo items. This task will also include writing comprehensive tests to verify each functionality of the component.

Specific API and Component Details:
Component Requirements:
TodoList should display a list of todo items fetched from a static array.
AddTodoForm allows users to add new todos.
Todos can be toggled between completed and not completed by clicking on them.
Todos can be deleted individually.
Step 1: Setup the Todo List Component
Create the TodoList Component:
Initialize the component state with a few todos for demonstration.
Include methods for adding, toggling, and deleting todos.
Step 2: Write Tests Using Jest and React Testing Library
Set Up Testing Environment:
Ensure you have Jest and React Testing Library installed:
        npm install --save-dev jest @testing-library/react @testing-library/jest-dom
Create a __tests__ directory in your src folder to organize your test files.
Test File Setup:

Create a test file for the TodoList component, e.g., TodoList.test.js, in the __tests__ directory.
Write Initial Render Test:

Verify that the TodoList component renders correctly.
Ensure that the initial state (a few demo todos) is rendered.
Test Adding Todos:

Write a test to verify that a new todo can be added.
Use fireEvent to simulate user input and form submission.
Test Toggling Todos:

Write a test to verify that a todo item can be toggled between completed and not completed.
Test Deleting Todos:

Write a test to verify that a todo item can be deleted.
Update Scripts in package.json

Edit the scripts section in your package.json
“scripts”: {
    “test”: “jest”
}
Run Tests:

Run your tests using Jest to ensure they pass:
     npm test
Well done on completing this project! Let the world hear about this milestone achieved.

Click here to Tweet this
