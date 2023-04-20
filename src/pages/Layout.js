import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
