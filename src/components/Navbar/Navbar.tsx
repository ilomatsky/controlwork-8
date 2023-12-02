import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="home">
        <strong>Quotes</strong>
      </Link>
      <Link to="quotes/form" className="new-quote">
        <strong>Submit new quote</strong>
      </Link>
    </nav>
  );
};

export default Navbar;
