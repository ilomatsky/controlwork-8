import {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';

interface Post {
  id: string;
  author: string;
  text: string;
}

interface AllState {
  posts: Post[];
  error: string | null;
}

const All = () => {
  const [state, setState] = useState<AllState>({
    posts: [],
    error: null,
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramsId = queryParams.get('equalTo') || '';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response;

        if (paramsId) {
          response = await axiosAPI.get<{ [key: string]: Post }>(`quotes.json?orderBy="category"&equalTo=${paramsId}`);
        } else {
          response = await axiosAPI.get<{ [key: string]: Post }>('quotes.json');
        }

        if (response.data) {
          const fetchedPosts = Object.values(response.data);
          setState({posts: fetchedPosts, error: null});
        } else {
          console.error('No data found.');
          setState({posts: [], error: 'No data found.'});
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        const errorMessage = error instanceof Error ? error.message : 'Error fetching posts.';
        setState({posts: [], error: errorMessage});
      }
    };

    fetchPosts();
  }, [paramsId]);

  const {posts, error} = state;

  if (error) {
    return <div className="content">Error: {error}</div>;
  }

  return (
    <div className="content">
      <h2>All Posts</h2>
      <ul>
          {posts.map((post) => (
              <li className="quotes" key={post.id}>
                  <h3>{post.author}</h3>
                  <p>{post.text}</p>
                  <Link to={`quotes/${post.id}`}>
                      <button onClick={() => console.log('post.id:', post.id)}>Edit</button>
                  </Link>
              </li>
          ))}
      </ul>
    </div>
  );
};

export default All;