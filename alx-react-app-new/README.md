# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Task 0: Apply Inline CSS Styling to React Components
Building up from the prev project named alx-react-app.Go ahead and duplicate the previous directory with your react app and name it alx-react-app-new

Objective: Enhance the existing React components (UserProfile, Header, MainContent, and Footer) with inline CSS styling.

Instructions:

Style the Header Component:

Open the Header.jsx file.
Add inline CSS to the <header> tag to change the background color, text color, and text alignment. For example:
 <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
   <h1>My Favorite Cities</h1>
 </header>
Style the UserProfile Component:

Open the UserProfile.jsx file.
Apply inline styling to enhance the appearance of the user’s name, age, and bio. Consider changing font sizes, colors, and margins.
Example:
 <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>
Style the MainContent and Footer Components:

Apply similar inline styling to MainContent.jsx and Footer.jsx. Experiment with different CSS properties to make these components visually appealing.
Run the Application:

Start your application to see the styled components.
Ensure that the inline styling is correctly applied and the components are visually enhanced.

Task 1: Create a Simple Counter Application Using State and Hooks
Objective: Build a counter application that increments, decrements, and resets a number using the useState hook in React.

Instructions:

Set Up the Counter Component:

Create a new file named Counter.jsx in the src/components folder.
In Counter.jsx, import the useState hook: import { useState } from 'react';.
Define a functional component named Counter.
Implement State Using useState:

Inside Counter, initialize state using useState to keep track of the count. Start the count at 0. const [count, setCount] = useState(0);
Create Buttons for Counter Actions:

Add three buttons to your component: one for incrementing the count, one for decrementing, and one for resetting the count to 0.
Implement onClick handlers for each button that update the state appropriately using setCount.
Display the Current Count:

Add a display element (like a <p> tag) to show the current count.
Final JSX Structure Example:

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
       </div>
     );
   }
Use the Counter in App.jsx:

Import and include the Counter component in your App.jsx.
Run the Application:

Start your application and test the functionality of the counter.
