import { NavLink } from 'react-router-dom';

const Header = () => {
  //const navigate = useNavigate();
  return (
    <header>
      <ul>
        {/* <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/about')}>About</li>
        <li onClick={() => navigate('/contact')}>Contact</li> */}
        <li>
          <NavLink
            to="/"
            className={isActive => {
              return isActive ? 'text-blue-700' : '';
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={isActive => {
              return isActive ? 'text-blue-700' : '';
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={isActive => {
              return isActive ? 'text-blue-700' : '';
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
