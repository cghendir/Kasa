import fullStar from '../images/Star-full.png';
import emptyStar from '../images/Star-empty.png';

const starFull = <img src={fullStar} alt="" />;
const starEmpty = <img src={emptyStar} alt="" />;

function Star({ ratting, note }) {
  const full = Array(note).fill(starFull);
  const empty = Array(note).fill(starEmpty);
  return (
    <div>
      <div className="star">
        {full.slice(note - ratting).map((full, index) => {
          return <span key={index}>{full}</span>;
        })}
        {empty.slice(ratting).map((empty, index) => {
          return <span key={index}>{empty}</span>;
        })}
      </div>
    </div>
  );
}

export default Star;
