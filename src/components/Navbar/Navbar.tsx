import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="quotes/form" className="new-quote">
        <strong>Submit new quote</strong>
      </Link>
    </>
  );
};

export default Navbar;
