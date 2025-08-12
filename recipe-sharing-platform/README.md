# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


#TASK 0. Setting Up a React Application for a Recipe Sharing Platform with Tailwind CSS
Objective: Begin building a Recipe Sharing Platform using React and Tailwind CSS. This task focuses on setting up the project foundation, including the creation of the React app, installing Tailwind CSS, and preparing a clean workspace for further development.

Project Overview:
The Recipe Sharing Platform will allow users to browse, add, and share recipes. It will feature multiple pages including a home page with a list of recipes, a detailed view for individual recipes, and a form to submit new recipes.

Task Description:
Start by setting up a new React project integrated with Tailwind CSS. This initial setup lays the groundwork for developing a responsive and visually appealing application.

Step 1: Create a New React Project
Step 2: Install and Configure Tailwind CSS
Tailwind CSS Installation:
Add Tailwind CSS and its dependencies to your project:
Step 3: Verify Tailwind CSS Integration
Test Tailwind CSS Setup:
Run your React application to ensure Tailwind CSS is integrated correctly:
Check the browser to see if the app loads without any errors and Tailwind’s styles are applied (you can test by adding a Tailwind utility class like text-blue-500 to a component).

#TASK 1. Building the Home Page of the Recipe Sharing Platform
Objective: Develop the Home Page for the Recipe Sharing Platform using React and style it with Tailwind CSS. This page will display a list of recipes, each with a brief summary, an image, and a link to view the recipe in detail.

Task Description:
This task involves creating a responsive Home Page that presents a list of recipes in an attractive and user-friendly layout. You will fetch mock data from a static JSON file and use Tailwind CSS to style the page.

Step 1: Create Mock Recipe Data
Prepare Mock Data:

Create a data.json file in the src directory containing an array of recipe objects. Each recipe should have an id, title, summary, and image URL.
Step 2: Create the Home Page Component
Component Setup:
Create a HomePage component in the src/components directory.
Use the useState and useEffect hooks to load the recipe data from the data.json file into state when the component mounts.
Display each recipe in a card layout, using Tailwind CSS for styling.
Step 3: Style the Home Page with Tailwind CSS
Styling Requirements:
Use Tailwind CSS to style the Home Page. Each recipe card should:
Display the recipe image, title, and summary.
Have a consistent, responsive design that adapts to different screen sizes.
Include hover effects to enhance interactivity, such as changing the shadow or scale.
Step 4: Responsive Layout Design
Implement a Responsive Grid:
Arrange the recipe cards in a grid layout that adjusts column count based on the screen size using Tailwind’s responsive grid utilities.
Ensure the grid layout is visually appealing and functional on both mobile and desktop views.

#TASK 2. Building the Recipe Detail Page

Objective: Create a Recipe Detail Page for the Recipe Sharing Platform that displays detailed information about each recipe when selected from the Home Page. The page will include ingredients, cooking instructions, and styled with Tailwind CSS to enhance readability and user engagement.

Task Description:
This task involves developing a detailed view for each recipe. When a user clicks on a recipe card on the Home Page, they should be redirected to a Recipe Detail Page that provides more comprehensive information about the recipe, including ingredients and cooking steps.

Step 1: Setup Routing with React Router
React Router Integration:

If not already set up, install React Router in your project: bash npm install react-router-dom
Set up basic routing in your application. Modify the App.js to include routes:
Step 2: Create the Recipe Detail Component
Component Creation:
Create a RecipeDetail component that will fetch and display the recipe data based on the recipe ID from the URL.
Fetch the recipe details from the data.json when the component mounts using the ID from the route parameters.
Display detailed information such as ingredients, cooking instructions, and an image.
Step 3: Style the Recipe Detail Page with Tailwind CSS
Styling Requirements:
Style the detail page to ensure it is visually appealing and maintains consistency with the Home Page design.
Use Tailwind CSS for layout, typography, and responsive design:
Ensure the text is readable with appropriate font sizes and spacing.
Use cards or well-defined sections to display ingredients and steps.
Implement a responsive design to ensure the page looks good on both mobile and desktop.

#TASK 3. Implementing a Responsive Form to Add New Recipes

Objective: Create a responsive form in the Recipe Sharing Platform that allows users to submit new recipes, including fields for recipe title, ingredients, and preparation steps. The form should be styled with Tailwind CSS and include validations.

Task Description:
This task involves building a form component that enables users to add new recipes to the platform. The form will be responsive, ensuring it works well on both mobile and desktop devices, and will use Tailwind CSS for styling to maintain a consistent look and feel with the rest of the application.

Step 1: Create the Add Recipe Form Component
Form Setup:
Create a AddRecipeForm component in the src/components directory.
Include input fields for the recipe title, ingredients (as a textarea), and preparation steps (also as a textarea).
Add a submit button to post the form data.
Step 2: Implement Form Validation
Validation Logic:
Implement simple front-end validation to ensure that all fields are filled out before the form can be submitted. You can use state to track the input values and validation status.
Example validation checks might include ensuring no fields are empty and perhaps checking that the ingredients list includes at least two items.
Step 3: Style the Form with Tailwind CSS
Styling Requirements:
Use Tailwind CSS to style the form fields, button, and overall layout. Ensure the form is visually appealing and matches the design language of the other pages.
Make the form responsive, adjusting layout and elements’ sizes based on the screen size.