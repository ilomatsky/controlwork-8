import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';

interface PostDetailProps {
}

interface Post {
  author: string;
  category: string;
  text: string;
}

const QuoteDetail: React.FC<PostDetailProps> = () => {
  const [quotes, setQuotes] = useState<Post | null>(null);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axiosAPI.get(`/quotes/${id}.json`);
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axiosAPI.delete(`/quotes/${id}.json`);
      console.log('Post deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (!quotes) {
    return <div className="content">Loading...</div>;
  }

  return (
    <div className="post-details">
      <h2>{quotes.author}</h2>
      <p>{quotes.text}</p>
      <div className="btns">
        <Link to={`/quotes/${id}/edit`} className="edit-btn btn">
          Edit
        </Link>
        <button className="delete-btn btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default QuoteDetail;
