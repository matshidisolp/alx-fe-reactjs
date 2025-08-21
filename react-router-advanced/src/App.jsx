import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import Posts from './components/Posts';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  console.log("App loaded!");

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Nested Routes for Profile */}
        <Route 
           path="/profile"
           element={
           <ProtectedRoute>
            <Profile />
            </ProtectedRoute>
           }
           >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
