import imgbanner from '../images/Img-Banner.jpg';

function Banner(props) {
  return (
    <div>
      <div>
        <div className="banner">
          <img className="imgBanner" src={imgbanner} alt="Rocher" />
          <div className="title">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
