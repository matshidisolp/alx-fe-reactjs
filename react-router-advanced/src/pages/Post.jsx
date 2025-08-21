import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Post() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        let mounted = true;
        //fetch the specific post from the JSONPlaceholder
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
         .then((res) => {
            if (!res.ok) throw new Error('Network error');
            return res.json();
         })
         .then((data) => {
            if (mounted) setPost(data);
         })
         .catch((err) => {
            if (mounted) setPost({ error: err.message});
         });

         return () => { mounted = false; };
    }, [postId]);

    if (!post) return <p>Loading post {postId}...</p>;
    if (post.error) return <p style={{ color: 'red' }}>Error: {post.error}</p>;

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    );
}