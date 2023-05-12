/*import { Component } from 'react';

class Accommodation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilData: {},
    };
  }
  componentDidMount() {
    const { id } = this.props;
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/freelance?id=${id}`);
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.freelanceData) {
        this.setState({ profileData: jsonResponse?.freelanceData });
      }
    };
    fetchData();
  }
  render() {
    const { id } = this.props;
    return (
      <div>
        <h1>Freelance : {id}</h1>
      </div>
    );
  }
}

export default Accommodation;*/

import Tag from '../components/Tag';
import Accordion from '../components/Accordion';
import Star from '../components/Star';
import ImageSlider from '../components/ImageSlider';
import useFetch from '../utils/Fetch';
import { useParams } from 'react-router-dom';
import { SliderData } from '../components/SliderData';

function AccommodationSheet() {
  const annonces = useFetch();
  const annonceId = useParams().id;
  let rightAnnonce = [];
  if (annonces.data) {
    rightAnnonce = annonces.data.find((annonce) => annonce.id === annonceId);
  }

  return (
    <div>
      <ImageSlider slides={SliderData} />
      <div className="housing-bar">
        <div className="accommodationSheet">
          <div className="accommodationSheet_title">
            <p>{rightAnnonce.title}</p>
            <p>{rightAnnonce.location}</p>
          </div>
          <div className="tags">
            {/*rightAnnonce.tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>{tag}</span>
              <Tag tag={tag} key={`${tag}-${index}`} />
            ))*/}
            {/*<Tag tag="Canal" />
            <Tag tag="Paris 10" />*/}
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
