import { Navigate } from 'react-router-dom';

// Zustand and Firebase would be appropriate to use here
const isAuthenticated = false;

export default function ProtectedRoute({ childre }) {
    if (!isAuthenticated) {
        //If user isnt logged in, redirect to Home
        return <Navigate to='/' replace />
    }

    //If use is logged in, show the protected page
    return children;
}