import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Zustand and Firebase would be appropriate to use here
const isAuthenticated = false;

export default function ProtectedRoute({ childre }) {
    const { user } = useAuth();  //get auth state from context

    if (!user) {
        //If user isnt logged in, redirect to Home
        return <Navigate to='/' replace />
    }

    //If user is logged in, render protected page
    return children;
}