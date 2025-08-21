import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main style={{ padding: 18 }}>
            <h2>404 - Page not found</h2>
            <p>We couldn't find the page you were looking for.</p>
            <p>
                <Link to='/'>Return to home</Link>
            </p>
        </main>
    );
}