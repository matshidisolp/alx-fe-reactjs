function SearchBar() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Advanced GitHub User Search</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
