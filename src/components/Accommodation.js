import { Link } from 'react-router-dom';

function Accommodation({ link, cover, title }) {
  return (
    <div className="rent">
      <Link to={link}>
        <img src={cover} alt="" />
        <div className="title"> {title} </div>
      </Link>
    </div>
  );
}

export default Accommodation;
