import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="quotes/star-wars">Star Wars</Link>
        </li>
        <li>
          <Link to="quotes/famous-people">Famous people</Link>
        </li>
        <li>
          <Link to="quotes/saying">Saying</Link>
        </li>
        <li>
          <Link to="quotes/humour">Humour</Link>
        </li>
        <li>
          <Link to="quotes/motivational">Motivational</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;