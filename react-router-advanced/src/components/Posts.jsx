import { Link } from 'react-router-dom';

const samplePosts = [
    {id: 1, title: 'Hello World' },
    {id: 2, title: 'React Router Tips' },
    {id: 3, title: 'Advanced Routing' },
];

export default function Posts() {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {samplePosts.map((p) => (
                    <li key={p.id}>
                        {/* absolute path to dynamic route */}
                        <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}