import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main style={{ padding: 18 }}>
            <h2>Welcome to the App!</h2>
            <p>Explore the app using the links below.</p>

            <nav style={{ marginTop: 12 }}>
                <Link to='/posts' style={{ marginRight: 12 }}>Posts</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
        </main>
    );
}