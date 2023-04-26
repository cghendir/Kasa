import { Link, useLocation } from 'react-router-dom';
import logo from '../images/Logo.png';

function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo de Kasa" />
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : false}>
            Accueil
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : false}
          >
            A Propos
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
