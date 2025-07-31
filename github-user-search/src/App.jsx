import React from 'react';
import SearchBar from "./components/SearchBar";

function App() {
    return(
        <div style={{ padding: '2rem', fontfamily: 'Arial' }}>
            <h1>GitHub User Search</h1>
            <p>Search for GitHub users by username and more.</p>
            <SearchBar />
        </div>
    );
}

export default App
