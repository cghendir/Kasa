import Accommodation from '../components/Accommodation';
import Banner from '../components/Banner';
import imgbanner from '../images/Img-Rock.jpg';

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" src={imgbanner} />
      <div className="accommodation">
        <Accommodation />
        <Accommodation />
        <Accommodation />

        <Accommodation />
        <Accommodation />
        <Accommodation />
      </div>
    </div>
  );
}

export default Home;
