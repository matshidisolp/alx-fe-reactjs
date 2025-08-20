import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false, 
    },
  },
});

export default function App() {
  // To monitor cache behavior
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: 800, margin: '2rem auto', fontFamily: "Arial" }}>
        <h1>React Query Demo</h1>
        <button onClick={() => setShowPosts((s) => !s)}>
          {showPosts ? 'Unmount Posts' : 'Mount Posts'}
        </button>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}