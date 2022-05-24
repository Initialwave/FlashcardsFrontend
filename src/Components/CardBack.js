import React, { useEffect, useState } from "react";

const CardBack = ({
  answer,
  category,
  subcategory,
  click,
  expand,
  style,
  classProp,
  expandLogo,
  recycleLogo,
  id,
}) => {
  const [showExpand, setShowExpand] = useState(false);

  let className = "card-back " + classProp;

  useEffect(() => {
    let contentHeight = document.getElementById(id).clientHeight;
    let cardHeight = document.getElementById("the-card").clientHeight;
    if (contentHeight > cardHeight) {
      setShowExpand(true);
    }
  }, []);

  return (
    <>
      <div className={className} style={style}>
        <p className="subcategory">{subcategory}</p>
        <div className="recycle" onClick={() => click()}>
          <img
            className="expand-image"
            src={recycleLogo}
            alt="expand the card size"
          />
        </div>
        {showExpand ? (
          <div className="expand" onClick={() => expand()}>
            <img
              className="expand-image"
              src={expandLogo}
              alt="expand the card size"
            />
          </div>
        ) : null}
        <div id={id} dangerouslySetInnerHTML={{ __html: answer }}></div>
      </div>
    </>
  );
};

export default CardBack;
