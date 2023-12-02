import {Link, useLocation} from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const categories = [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous people', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humour', id: 'humour'},
    {title: 'Motivational', id: 'motivational'},
  ];

  return (
    <div className="sidebar">
      <ul>
        {categories.map((category) => (
          <li className="sidebar-link" key={category.id}>
            <Link to={`/quotes.json?orderBy="category"&equalTo="${category.id}"`}
                  className={location.pathname === `/quotes/${category.id}` ? 'active' : ''}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;