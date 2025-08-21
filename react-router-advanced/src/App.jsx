import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSetting from './pages/ProfileSettings';
import NotFound from './pages/NotFound';
import './App.css'

function App() {
    return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: "2rem auto", fontFamily: "Arial" }}>
        <header style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Posts list and dynamic post route */}
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />

          {/* Profile route with nested children */}
          <Route path="/profile" element={<Profile />}>
            {/* Index route shows when user visit /profile */}
            <Route index element={<ProfileDetails />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App;
