import React, { useEffect } from "react";
import Card from "./Card";
import "../css/cards.css";
import expandLogo from "../pics/expand.svg";
import recycleLogo from "../pics/recycle.svg";

const CardsDisplay = ({ data, em }) => {
  let className;

  if (document.documentElement.clientWidth < 700) {
    className = "hide-cards";
  }

  return (
    <>
      <div id="cards-container" className={className}>
        {data.map(e => (
          <Card
            cardData={e}
            key={e.id}
            number={e["number"]}
            id={e.id}
            question={e.question}
            answer={e.answer}
            category={e.category}
            subcategory={e["subCategory"]}
            expandLogo={expandLogo}
            recycleLogo={recycleLogo}
            em={em}
          />
        ))}
        <div id="quick-div"></div>
      </div>
    </>
  );
};

export default CardsDisplay;
