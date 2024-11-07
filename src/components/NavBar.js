import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
