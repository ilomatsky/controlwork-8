import {useState, useEffect} from 'react';
import axiosAPI from '../../axiosAPI';

interface Post {
  id: string;
  author: string;
  text: string;
}

const All = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosAPI.get<{ [key: string]: Post }>('/quotes.json');
        const fetchedPosts = Object.values(response.data);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.author}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;
