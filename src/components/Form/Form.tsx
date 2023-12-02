import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axiosAPI from '../../axiosAPI';

const categories = [
  {title: 'Star Wars', category: 'star-wars'},
  {title: 'Famous people', category: 'famous-people'},
  {title: 'Saying', category: 'saying'},
  {title: 'Humour', category: 'humour'},
  {title: 'Motivational', category: 'motivational'},
];

const PostForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        if (id) {
          const response = await axiosAPI.get(`quotes/${id}.json`);
          if (response.data) {
            const {category, author, text} = response.data;
            setCategory(category);
            setAuthor(author);
            setText(text);
          }
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const postData = {category, author, text};

      if (id) {
        await axiosAPI.put(`quotes/${id}.json`, postData);
        console.log('Quote updated successfully');
        navigate(`/`);
      } else {
        await axiosAPI.post('quotes.json', {...postData, category});
        console.log('Quote added successfully');
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating/adding quote:', error);
    }
  };

  return (
    <div className="add-quote-container">
      <h2 className="add-quote-header">{id ? 'Edit quote' : 'Add new quote'}</h2>
      <form className="add-quote-form" onSubmit={handleSubmit}>
        <label className="add-quote-label">
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="add-quote-select">
            <option value="" disabled>Select a category</option>
            {categories.map((cat) => (
              <option key={cat.category} value={cat.category}>
                {cat.title}
              </option>
            ))}
          </select>
        </label>
        <br/>
        <label className="add-quote-label">
          Author:
          <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}
                 className="add-quote-input"/>
        </label>
        <br/>
        <label className="add-quote-label">
          Text:
          <textarea value={text} required onChange={(e) => setText(e.target.value)} className="add-quote-textarea"/>
        </label>
        <br/>
        <button type="submit" className="add-quote-button">
          {id ? 'Update quote' : 'Create quote'}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
