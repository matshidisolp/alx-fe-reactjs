import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <h1 className="text-3xl font-bold mb-2 text-center">GitHub User Search</h1>
      <p className="text-center mb-6">Search for GitHub users by username, location, and repositories.</p>
      <Search />
    </div>
  );
}

export default App;

