import Tag from '../components/Tag';
import Accordion from '../components/Accordion';
import Star from '../components/Star';
import ImageSlider from '../components/ImageSlider';
import useFetch from '../utils/Fetch';
import { useParams } from 'react-router-dom';
import Error from './Error.js';

function AccommodationSheet() {
  const annonces = useFetch();
  const annonceId = useParams().id;
  if (!annonces.data) {
    return <div>Loader...</div>;
  }
  let rightAnnonce = null;
  if (annonces.data) {
    rightAnnonce = annonces.data.find((annonce) => annonce.id === annonceId);
  }
  if (!rightAnnonce) {
    return <Error />;
  }

  return (
    <div>
      <ImageSlider slides={rightAnnonce.pictures} />
      <div className="housing-bar">
        <div className="accommodationSheet">
          <div className="accommodationSheet_title">
            <p>{rightAnnonce.title}</p>
            <p>{rightAnnonce.location}</p>
          </div>
          <div className="tags">
            {rightAnnonce.tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>
                <Tag tag={tag} key={`${tag}-${index}`} />
              </span>
            ))}
          </div>
        </div>

        <div className="nameAndStar">
          <div className="accommodationSheet_name">
            <p> {rightAnnonce.host.name} </p>
            <img alt="" src={rightAnnonce.host.picture} />
          </div>
          <Star ratting={rightAnnonce.rating} note={5} />
        </div>
      </div>
      <div className="accommodationAccodion">
        <Accordion title="Description" content={rightAnnonce.description} />
        <Accordion title="Équipements" content={rightAnnonce.equipments} />
      </div>
    </div>
  );
}

export default AccommodationSheet;
