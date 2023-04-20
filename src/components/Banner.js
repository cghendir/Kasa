function Banner(props) {
  return (
    <div className="banner">
      <img className="imgBanner" src={props.src} alt="Rocher" />
      <div className="title">{props.title}</div>
    </div>
  );
}

export default Banner;
