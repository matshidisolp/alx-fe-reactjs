# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

TASK 3. Build a Simple Company Website with React

Objective: Create a four-page company website using React. The website should have a homepage, an about page, a services page, and a contact page.

Requirements:

Set Up the Project:

Use vite to set up a new project called my-company
Install React Router for routing: npm install react-router-dom.
Create Basic Page Components:

Create four components: Home.jsx, About.jsx, Services.jsx, and Contact.jsx. Each component should return a simple JSX layout representing the respective page.
Implement Routing:

In your App.jsx, set up routing using BrowserRouter, Routes, and Route from react-router-dom.
Define routes for each of the four pages.
Navigation Bar:

Create a Navbar.jsx component with links (Link from react-router-dom) to each of the four pages.
Include the Navbar component in App.jsx so it appears on all pages.
Apply Inline CSS Styling:

Style each page and the navigation bar using inline CSS to make the website visually appealing.
Add Simple Interactivity:

On the Contact page, implement a simple contact form with state hooks. It doesn’t need to submit anywhere but should demonstrate the use of state.
Website Content:

Home: A welcome message.
About: Information about the company.
Services: A list of services offered.
Contact: A contact form (name, email, message).
Extra Features (Optional):

Implement a footer component that appears on all pages.
Add images or additional styling to enhance the website’s appearance.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
