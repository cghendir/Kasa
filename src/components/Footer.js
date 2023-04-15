import logo from '../images/logo_white.png';

function Footer() {
  return (
    <div>
      <div>
        <div className="footer">
          <img src={logo} alt="" />
          <div className="footer_text">© 2020 Kasa. All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
