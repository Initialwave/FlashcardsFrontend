import React, { useState } from "react";

const CardFront = ({
  question,
  category,
  subcategory,
  click,
  style,
  classProp,
}) => {
  let className = "card-front " + classProp;

  return (
    <div className={className} style={style} onClick={() => click()}>
      <p className="question">{question}</p>
      <p className="subcategory">{subcategory}</p>
    </div>
  );
};

export default CardFront;
