import Accommodation from '../components/Accommodation';
import Banner from '../components/Banner';
import imgbanner from '../images/Img-Banner.jpg';

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" src={imgbanner} />
      <Accommodation />
    </div>
  );
}

export default Home;
