import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching, // true while a background refetch is happening
    refetch,    // manual refetch function
  } = useQuery(
    ['posts'],          // query key (cache key)
    fetchPosts,         // async function
    {
      staleTime: 60 * 1000,     // 1 min: data is "fresh" → no auto refetch on mount
      cacheTime: 5 * 60 * 1000, // 5 min: data kept in cache after unmount
      refetchOnMount: true,     // if data is stale, refetch on mount
    }
  );

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={{ marginTop: "1rem" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => refetch()}>Refetch</button>
        {isFetching && <small> Updating…</small>}
      </div>

      <ul>
        {data.slice(0, 10).map((p) => (
          <li key={p.id} style={{ margin: "1rem 0" }}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
