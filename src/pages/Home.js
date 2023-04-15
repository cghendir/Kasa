import Accommodation from '../components/Accommodation';
import Banner from '../components/Banner';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <Banner title="Chez vous, partout et ailleurs" />
      <Accommodation />
    </div>
  );
}

export default Home;
