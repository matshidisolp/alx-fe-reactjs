# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


WEEK 13: Working with APIs
TASK 0. Setting Up a React Project for GitHub User Search Application

Objective: Begin building a GitHub User Search Application using React. This task focuses on setting up the project foundation, including creating the React app, installing necessary packages, and preparing the environment for further development.

Project Overview:
The GitHub User Search Application will allow users to search for GitHub profiles using the GitHub API. It will feature a search input, display results including basic user information, and link to their GitHub profiles.

Task Description:
Start by setting up a new React project and preparing it for integration with the GitHub API. This involves setting up the basic project structure and ensuring that all necessary tools and packages are installed.

Step 1: Create a New React Project
React Project Setup:

Open your terminal and set up a new React application using Create React App:
npm create vite@latest github-user-search -- --template react
cd github-user-search
Step 2: Install Necessary Packages
Dependencies Installation:

Install Axios for making HTTP requests, which will be used to interact with the GitHub API:
npm install axios
Step 3: Prepare the Application Structure
Basic Application Structure:
Create a simple structure for your application:
components/: Directory to hold all React components.
services/: Directory for services such as API calls.
App.jsx: Modify this file to include basic routing and a simple layout.
Step 4: Configure Environment for API Calls
Environment Setup:
Set up environment variables to store sensitive information such as API keys (if necessary for GitHub API):
Create a .env file in the root directory.
Add environment variables like VITE_APP_GITHUB_API_KEY if needed.
Use import.meta.env.VITE_APP_GITHUB_API_KEY in your API service files.
Step 5: Initial Test Run
Run the Application:

Ensure that your setup works by running the application:
npm run dev
The application should load without errors, displaying a basic setup ready for further development.
Name of the github repo: github-user-search

TASK 1. Integrating the GitHub API and Creating a Basic Search Feature

Objective: Develop a basic search functionality in the GitHub User Search Application using React and the GitHub API. This task focuses on integrating the API, creating a search input, and displaying search results.

Task Description:
Build the core feature of the application—the ability to search for GitHub users. You’ll create a component that allows users to input a search term and fetch user data from the GitHub API based on that input. The results will be displayed in a simple and readable format.

Step 1: Create the Search Component
Search Input Setup:
Develop a Search component that includes a form with an input field for entering GitHub usernames.
Implement state handling to capture the input value and manage the form submission.
Step 2: Handle API Requests
API Integration:
Create a githubService.js file in the services directory to manage API calls using Axios.
Set up a function to fetch user data from the GitHub API using the search term provided by the user, the name of the function is fetchUserData
GitHub API endpoint for user search: https://api.github.com/users/{username}
Step 3: Display Search Results
Results Display:
Modify the Search component to display user information after a successful API call. Include basic details such as the user’s avatar, name, and a link to their GitHub profile.
Implement conditional rendering based on the state of the API call, if the state is loading display a message indicating Loading..., if encountered an error display the message Looks like we cant find the user, and display the basic info if the api call is successful.

TASK 2. Enhancing User Interface and Adding Advanced Search Features

Objective: Improve the user interface of the GitHub User Search Application and introduce advanced search capabilities that allow filtering based on more detailed criteria, such as location and repositories count.

Task Description:
This task focuses on refining the user interface for a better user experience and adding functionality to search GitHub users by additional criteria beyond just the username. Implement a more sophisticated search form that can handle multiple parameters and display a richer set of results.

Step 1: Update the Search Component Interface
UI Enhancement:
Redesign the Search component to include additional input fields for advanced search criteria such as location and minimum repositories.
Use Tailwind CSS to style the form and ensure it is responsive and accessible.
Step 2: Extend the GitHub API Integration
Advanced Search Functionality:
Modify the githubService.js to handle additional query parameters for advanced search features.
Construct API requests that can filter users based on the specified criteria. Utilize GitHub’s Search API to achieve this.
Example API endpoint for advanced search: https://api.github.com/search/users?q={query} where {query} might include parameters like location and repo count.
Step 3: Display Advanced Search Results
Results Display Enhancement:
Upgrade the results display section in the Search component to show a list of users that match the advanced search criteria.
Include more detailed information in the results, such as the user’s location, number of repositories, and a link to their full profile.
Implement pagination or “load more” functionality if the API response includes multiple pages of results.

TASK 3. Deploying the GitHub User Search Application to Vercel

Objective: Deploy the completed GitHub User Search Application to Vercel, ensuring it is publicly accessible and performs well under real-world conditions.

Task Description:
This final task involves taking your fully developed GitHub User Search Application and deploying it to Vercel. This step is crucial as it moves your application from a development setting to a production environment, allowing real users to interact with it.

Step 1: Prepare the Application for Deployment
Optimization:
Review your application code to ensure that it is optimized for performance. This includes checking for and removing any console logs, ensuring images are optimized, and that the application handles errors gracefully.
Test the application thoroughly to make sure all features work as expected without any bugs.
Add your .env file in the .gitignore file
Step 2: Create a Vercel Account and Set Up a New Project
Vercel Setup:
If you don’t already have a Vercel account, create one at Vercel’s website.
Once logged in, set up a new project by importing your project repository from GitHub, GitLab, or Bitbucket. Follow Vercel’s guide to connect your repository.
Step 3: Configure Environment Variables in Vercel
Environment Variables:
If your application uses any environment variables (such as an API key for the GitHub API), add these to your Vercel project settings under the “Environment Variables” section.
Ensure these variables are included securely and correspond to the production environment.
Step 4: Deploy Your Application
Deployment:
Trigger a deployment by pushing your latest changes to your connected repository or manually deploying through Vercel’s dashboard.
Vercel will automatically build and deploy your application based on the settings and configurations you’ve provided.
Monitor the deployment process in the Vercel dashboard to ensure there are no build errors.
Step 5: Verify the Live Application
Post-Deployment Checks:
Once the deployment is successful, visit the deployed application’s URL provided by Vercel.
Test all functionalities to ensure that the application behaves as expected in the live environment.
Check responsiveness, API interactions, and overall performance on various devices and networks.