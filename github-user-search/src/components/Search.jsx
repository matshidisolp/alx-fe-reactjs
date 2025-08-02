import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e, isLoadMore = false) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    try {
      const fullQuery = `${query}&page=${isLoadMore ? page + 1 : 1}&per_page=10`;
      const users = await searchUsers(fullQuery);

      if (isLoadMore) {
        setResults((prev) => [...prev, ...users]);
        setPage((prev) => prev + 1);
      } else {
        setResults(users);
        setPage(1);
      }

      setHasMore(users.length === 10);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder='e.g. john+location:london+repos:>10'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search Users
        </button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="space-y-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt="avatar" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold text-lg">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={(e) => handleSearch(e, true)}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
