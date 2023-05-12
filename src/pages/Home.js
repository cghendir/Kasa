import React from 'react';
import Banner from '../components/Banner';
import imgbanner from '../images/Img-Rock.jpg';
import useFetch from '../utils/Fetch.js';
import Accommodation from '../components/Accommodation';

function Home() {
  const annonces = useFetch();
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" src={imgbanner} />
      {annonces.data && (
        <div className="accommodation">
          {annonces.data.map((annonce) => (
            <Accommodation
              key={annonce.id}
              link={`/accommodation/${annonce.id}`}
              title={annonce.title}
              cover={annonce.cover}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
