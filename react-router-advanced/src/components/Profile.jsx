import { NavLink, Outlet } from 'react-router-dom';

export default function Profile() {
    return (
        <div>
            <h2>Profile</h2>

            {/*A NavLink uses relative paths by default when w/n parent route */}
            <nav style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <NavLink to='details'>Details</NavLink>
                <NavLink to='setting'>Settings</NavLink>
            </nav>

            {/* Nested routes rendering */}
            <Outlet />
        </div>
    );
}