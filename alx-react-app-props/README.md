# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Task 2: Refactor Prop Drilling to Use Context API
Objective: Refactor an existing React application that uses prop drilling to manage user data across multiple components. Implement the Context API to streamline data flow within the application.

For this project use the project you created with the directory alx-react-app. Duplicate that directory and rename the duplicate as alx-react-app-props. Use this new directory for this task.

Initial Code with Prop Drilling
Suppose you have the following components set up with prop drilling:

App.jsx:

import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
ProfilePage.jsx:

import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
UserInfo.jsx:

import UserDetails from './UserDetails';

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}

export default UserInfo;
UserDetails.jsx:

function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
Refactoring Task
Instructions:

Create a UserContext:

Create a new file UserContext.js.
Initialize a Context using React.createContext() and export it.
Provide Context in App:

In App.jsx, import UserContext and wrap the ProfilePage component inside UserContext.Provider. Pass userData as the value to the provider.
Consume Context in UserDetails:

Modify UserDetails.jsx to consume UserContext using the useContext hook instead of receiving userData as a prop.
Remove Unused Props:

Remove the userData props passed through ProfilePage and UserInfo, as these will no longer be necessary.
