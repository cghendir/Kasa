import { Link, useLocation } from 'react-router-dom';
import logo from '../images/LOGO.png';

function Header() {
  const location = useLocation();
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo de Kasa" />
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Accueil
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            A Propos
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
