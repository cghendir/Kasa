import logo from '../images/LOGO.png';

function Header() {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="logo de Kasa" />
        <nav>
          <ul>
            <li>Accueil</li>
            <li>A Propos</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
