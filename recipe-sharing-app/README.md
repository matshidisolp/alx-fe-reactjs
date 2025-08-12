# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Week 12 State Management in React
TASK 0:  Initialize the Recipe Sharing Application with Zustand State Management

Task Description:
Kick off the project by creating the foundational React application, integrating Zustand for state management, and setting up a simple interface for displaying and adding recipes.

Step 1: Set Up the React Project and Install Zustand
Step 2: Define the Recipe Store with Zustand
Create a Zustand Store:
Develop a store to manage the recipes with actions for adding a new recipe and initializing the list.
Step 3: Implement Recipe Components
Develop React Components:
RecipeList Component: Displays the list of recipes.
AddRecipeForm Component: Allows users to input and submit new recipes.
The above components should be under src/components directory
Step 4: Integrate Components in the App
Use Components in the Main App Component:
Import and use RecipeList and AddRecipeForm in App.jsx to display the functionality.

Deliverables:
React Project Setup: Project directory and initial setup files.
Zustand Store Code: The Zustand store configuration file.
Component Code: Source code for the RecipeList and AddRecipeForm components.

TASK 1: Enhancing the Recipe Sharing Application with Detailed Recipe Management
Objective: Expand the Recipe Sharing Application to include detailed recipe management features such as editing and deleting recipes, as well as viewing individual recipe details.

Task Description:
Build on the initial setup by adding functionality to view individual recipes, edit existing recipes, and delete recipes. This task introduces more complex state manipulations and interactions within the Zustand store and React components.

Step 1: Update the Zustand Store
Enhance the Store:
Extend your existing Zustand store to include actions for updating and deleting recipes. The actions should be named addRecipe, deleteRecipe,updateRecipe`.
Step 2: Create Components for Recipe Details, Editing, and Deleting
Develop New Components:
RecipeDetails Component: Displays detailed information about a recipe. This component should be accessible via a route that includes the recipe’s ID.
EditRecipeForm Component: Allows users to edit an existing recipe and submit changes.
DeleteRecipeButton Component: A simple button that, when clicked, deletes a specific recipe.
Step 3: Integrate Routing for Recipe Details
Setup React Router (if not already set up):
Implement routing in your application to handle navigation to different recipes’ details.
Use react-router-dom to set up routes that match the path to RecipeDetails.
Step 4: Testing and Integration
Test New Features:
Ensure all new components function correctly within the app. Test the edit and delete functionalities thoroughly to ensure state updates are handled properly across all components.
Deliverables:
Code Files: Include updated store configurations, new React components for recipe details, editing, and deleting.
Routing Setup: Changes made to support routing to different components.

TASK 2: Implementing Advanced Search and Filtering Capabilities
Objective: Enhance the Recipe Sharing Application with advanced search and filtering capabilities, allowing users to easily locate recipes based on specific criteria such as ingredients, recipe name, or preparation time.

Task Description:
Expand the functionality of your Recipe Sharing Application by integrating advanced search and filtering mechanisms. This will improve the user experience by making it easier to navigate and find specific recipes within the application.

Step 1: Update the Zustand Store for Search and Filtering
Enhance the Store:

Extend your existing Zustand store to include a search term and filtered results. Add actions to update the search term and compute filtered recipes based on this term.
Step 2: Create Search Input Component
Develop Search Component:

Create a SearchBar component that allows users to input a search term. This component should update the search term in the Zustand store on change.
Step 3: Display Filtered Results
Show Filtered Recipes:
Modify the RecipeList component to display recipes from the filteredRecipes array in the Zustand store instead of the complete list. Ensure it updates dynamically as the search term changes.
Trigger the filtering action whenever the search term is updated.
Step 4: Enhance User Interface for Filtering
UI Improvements:
Ensure that the search bar and the list of filtered results are displayed prominently in the UI.
Consider adding additional filters based on other criteria like ingredients or cooking time if relevant to your application’s data structure.
Step 5: Testing and Integration
Comprehensive Testing:
Test the search functionality extensively to ensure that it accurately filters recipes based on user input.
Check the responsiveness of the interface when dealing with a large number of recipes to ensure performance remains optimal.

TASK 3: Implementing User Favorites and Personalized Recipe Recommendations
Objective: Enhance the user experience in your Recipe Sharing Application by adding functionality for users to favorite recipes and receive personalized recommendations based on their preferences and interactions.

Task Description:
Develop features that allow users to mark recipes as favorites and leverage user data to suggest personalized recipe recommendations. This addition will make the application more engaging and tailored to individual user tastes.

Step 1: Update the Zustand Store for Favorites and Recommendations
Enhance the Store:

Add a favorites array to the Zustand store to manage the user’s favorite recipes.
Implement actions in the store to add and remove recipes from favorites.
Optionally, add a mechanism to generate recommendations based on the user’s favorite recipes or other criteria.
Step 2: Create Components for Favorites and Recommendations
Develop New Components:

FavoritesList Component: Displays a list of the user’s favorite recipes.
RecommendationsList Component: Shows personalized recipe recommendations based on the user’s favorites or other criteria.
Step 3: Integrate Favorites and Recommendations into the UI
UI Integration:
Place FavoritesList and RecommendationsList components appropriately in the main application layout.
Ensure that users can easily add or remove recipes from their favorites and view recommendations seamlessly.
Step 4: Testing and User Feedback
Comprehensive Testing:
Test the functionality of adding and removing favorites extensively.
Evaluate the relevance and accuracy of the recommendations system.
Gather user feedback on the favorites and recommendations features to refine and improve them.
Step 5: Documentation and Final Adjustments
Final Documentation and Adjustments:
Ensure all new features are fully integrated and functioning as expected within the overall application.
Provide brief inline comments or notes explaining the logic behind the favorites and recommendations features.

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