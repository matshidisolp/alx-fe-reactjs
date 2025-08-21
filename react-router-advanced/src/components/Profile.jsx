import { NavLink, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    return (
        <div>
            <h2>Profile Page</h2>

            {/*Nav for nested routes */}
            <nav>
                <ul>
                    <li>
                        <Link to ='details'>Profile Details</Link>
                    </li>
                    <li>
                        <Link to='settings'>Profile Settings</Link>
                    </li>
                </ul>
            </nav>

            {/* Nested routes rendering */}
            <Routes>
                <Route path='details' element={<ProfileDetails />} />
                <Route path='settings' element={<ProfileSettings />}/>
            </Routes>
        </div>
    );
}