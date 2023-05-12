import React, { createRef } from 'react';
import { useState } from 'react';
import iconUp from '../images/Icon-up.png';
import iconDown from '../images/Icon-down.png';

function Accordion({ title, content }) {
  const collapseRef = createRef();

  const [active, setActive] = useState(false);
  const [collapseStyle, setCollapseStyle] = useState({ height: 0, opacity: 0 });
  const handleToggle = () => {
    if (!active) {
      setCollapseStyle({
        height: collapseRef.current.scrollHeight,
        opacity: 1,
      });
      setActive(true);
    } else {
      setCollapseStyle({ height: 0, opacity: 0 });
      setActive(false);
    }
  };
  return (
    <div className="accordion">
      <div className="accordion_title" onClick={handleToggle}>
        <span className="accordion_title--text">{title}</span>
        <span className="accordion_icon">
          <img
            src={active ? iconUp : iconDown}
            alt="Icon de flèche vers le bas"
          />
        </span>
      </div>
      <div
        className="accordion_content"
        ref={collapseRef}
        style={collapseStyle}
      >
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li className="accordion_content--list" key={index}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="accordion_content--text">{content}</p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
