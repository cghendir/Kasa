import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import './sass/App.scss';

function App() {
  return (
    <div>
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
