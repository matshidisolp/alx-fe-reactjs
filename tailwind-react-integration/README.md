# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#TASK 0. Setting Up Tailwind CSS in a New React Project

Objective: Install and configure Tailwind CSS in a React application to prepare for applying utility-first styling principles to React components.

Task Description:
This task involves creating a new React project and integrating Tailwind CSS into it. You will follow a series of specific steps to ensure Tailwind CSS is correctly configured and ready to use for styling your React components.

Step 1: Create a New React Project
Project Setup:

Begin by creating a new React application using Vite. Open your terminal and run:
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration
Step 2: Install Tailwind CSS and Its Dependencies
Installation:

Install Tailwind CSS and the Vite plugin by running the following command in your project directory:
npm install tailwindcss @tailwindcss/vite
Step 3: Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.
Open the vite.config.ts file and update it like this:

// vite.config.ts

import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ✅ Add this

export default defineConfig({
  plugins: [
        react(),
        tailwindcss(), // ✅ Add this
  ],
})
Step 4: Include Tailwind in Your CSS
Import Tailwind:

Open the src/index.css file and add the following directive at the top:
@import "tailwindcss";
Step 5: Verify Installation
Run the Application:

Start your React application to ensure Tailwind CSS is correctly integrated and no errors occur:
npm run dev
You should see the default React application rendered with no errors, indicating that Tailwind CSS is now integrated into your project.

#TASK 1. Styling a Provided React Component with Tailwind CSS

Objective: Apply Tailwind CSS to style a specific React component provided in the task. This will test your ability to use Tailwind CSS’s utility-first classes to achieve a detailed and responsive design.

Task Description:
You will be provided with a basic React component. Your task is to style this component using Tailwind CSS according to specific style requirements. This exercise will help you practice applying responsive design principles and utility classes effectively.

Provided Component:
You will work with a UserProfile component. The component should be under src/components folder and it should be named UserProfile 

Styling Requirements:
Container (div.user-profile):

Apply a background color of cool gray (bg-gray-100).
Add padding of 8 units (p-8).
Set a maximum width of 400px (max-w-sm).
Center the card on the page vertically and horizontally (mx-auto, my-20).
Apply a rounded border of medium size (rounded-lg).
Add a shadow for depth (shadow-lg).
Image (img):

Make the image circular (rounded-full).
Ensure the image has a width and height of 150px (w-36 h-36).
Center the image (mx-auto).
Heading (h1):

Use a larger font size (text-xl).
Set the color to a deep blue (text-blue-800).
Add vertical margin to separate it from the image and the paragraph (my-4).
Paragraph (p):

Set the text color to gray-600 (text-gray-600).
Make the font size slightly smaller than the heading (text-base).
Instructions for Styling:
Create the component in your React app (tailwind-react-integration)
Update the provided UserProfile component by adding the specified Tailwind CSS classes directly to the corresponding elements in the JSX.
Ensure each element adheres to the styling requirements to create a visually appealing and neatly organized profile card.

#TASK 2. Responsive Design Implementation Using Tailwind CSS

Objective: Enhance the UserProfile component to be responsive and adaptable to different device sizes using Tailwind CSS’s responsive utilities.

Task Description:
Building on the previous task, this step involves adjusting the UserProfile component to ensure it displays attractively across various screen sizes. Use Tailwind CSS’s responsive utilities to make the component’s layout and typography adjust dynamically based on the viewport size.

Instructions for Responsive Styling:
Responsive Container Adjustments:

Ensure the container maintains comfortable margins and padding on smaller screens but utilizes more space on larger screens.
Example modifications:
Padding should be smaller on smaller devices (p-4 on sm: screens and p-8 on md: screens and above).
The maximum width should adapt to screen size (use max-w-xs on small screens and max-w-sm on medium screens and above).
Responsive Typography:

Adjust the font size of the heading and paragraph text to increase readability on different devices.
Example modifications:
The heading should be slightly smaller on smaller devices (text-lg on sm: screens and text-xl on md: screens and above).
The paragraph text should maintain readability without overwhelming smaller screens (text-sm on sm: screens and text-base on md: screens and above).
Responsive Image Sizing:

The image should scale appropriately across devices to ensure it does not dominate the layout on smaller screens but remains visible.
Example modifications:
Use w-24 h-24 on sm: screens and w-36 h-36 on md: screens and above for the profile image.

#TASK 3. Adding Advanced Interactivity and Transitions with Tailwind CSS

Objective: Enhance the UserProfile component with interactive elements such as hover effects, transitions, and animations using Tailwind CSS, to improve user experience and engagement.

Task Description:
This task involves adding sophisticated visual feedback and dynamic effects to the UserProfile component using Tailwind CSS’s built-in utilities for transitions and animations. You’ll make the component more interactive and visually appealing.

Instructions for Adding Interactivity:
Hover Effects:

Apply a hover effect to the profile image to change its scale slightly, giving a sense of interaction when the user points at it.
Example modifications:
Add hover:scale-110 to the image to make it grow slightly on hover.
Include a transition utility to make the scale change smooth (transition-transform duration-300 ease-in-out).
Text Emphasis on Hover:

Add a hover effect to the heading so that it changes color when hovered over to indicate it’s an interactive element.
Example modifications:
Change the text color to a lighter shade of blue on hover (hover:text-blue-500).
Enhanced Shadows on Card Hover:

Increase the shadow of the entire card when the mouse hovers over it to create a lifting effect.
Example modifications:
Use hover:shadow-xl on the container to enhance the shadow during hover.
