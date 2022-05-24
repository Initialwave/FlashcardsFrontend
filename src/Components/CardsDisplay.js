import React from "react";

const CardsDisplay = () => {
  let data;

  fetch("http://localhost:8080/questions/getAll");
  data
    .then(r => {
      data = r.json;
    })
    .catch(err => console.log(err));
  return <p>{JSON.stringify(data)}</p>;
};

export default CardsDisplay;
