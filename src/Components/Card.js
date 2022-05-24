import React, { useEffect, useRef, useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = ({
  id,
  question,
  category,
  subcategory,
  answer,
  expandLogo,
  recycleLogo,
  em,
  number,
}) => {
  const [front, setFront] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [cardClass, setCardClass] = useState("card hide");
  const [frontClass, setFrontClass] = useState("");
  const [backClass, setBackClass] = useState("");
  const [updateClass, setUpdateClass] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const expandedStyle = useRef({});

  let onFlipHandler = () => {
    setFront(!front);
    setUpdateClass(true);
  };

  let onExpandHandler = () => {
    if (expanded) {
      setCardClass("card ");
    } else {
      setCardClass(cardClass + "expanded-card");
    }
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!initialRender) {
      let quickDiv = document.getElementById("quick-div");
      quickDiv.innerHTML = answer;
      let contentHeight = quickDiv.clientHeight + em * 1;
      if (expanded) {
        let cardExpandedHeight =
          document.getElementById("the-card").clientHeight * 2.6;
        if (contentHeight < cardExpandedHeight) {
          expandedStyle.current = {
            maxHeight: `Calc(${contentHeight.toString()}px + 3em)`,
            minHeight: `Calc(${contentHeight.toString()}px + 3em)`,
          };
        } else {
          expandedStyle.current = { maxHeight: "40em", minHeight: "40em" };
        }
      } else {
        expandedStyle.current = { maxHeight: "15em", minHeight: "15em" };
      }
      quickDiv.innerHTML = null;
      setRerender(!rerender);
    }
    setInitialRender(false);
  }, [expanded]);

  setTimeout(() => {
    setCardClass(cardClass.replace("hide", ""));
  }, number * 150);

  let frontStyle = {};
  let backStyle = {};

  if (front) {
    if (frontClass.length > 0) {
      if (updateClass) {
        setFrontClass("front-to-front");
        setBackClass("back-to-back");
        setUpdateClass(false);
      }
    }
    frontStyle["zIndex"] = 2;
    backStyle["zIndex"] = 1;
    backStyle["color"] = "transparent";
    backStyle["overflowY"] = "hidden";
    backStyle["opacity"] = "0";
  } else {
    if (updateClass) {
      setFrontClass("front-to-back");
      setBackClass("back-to-front");
      setUpdateClass(false);
    }
    frontStyle["zIndex"] = 1;
    backStyle["zIndex"] = 2;
    backStyle["color"] = "black";
    backStyle["overflowY"] = "auto";
    backStyle["opacity"] = "1";
  }

  return (
    <div id="the-card" className={cardClass} style={expandedStyle.current}>
      <CardFront
        click={() => onFlipHandler()}
        question={question}
        category={category}
        subcategory={subcategory}
        style={frontStyle}
        classProp={frontClass}
      />
      <CardBack
        click={() => onFlipHandler()}
        expand={() => onExpandHandler()}
        answer={answer}
        category={category}
        subcategory={subcategory}
        style={backStyle}
        classProp={backClass}
        id={id}
        expandLogo={expandLogo}
        recycleLogo={recycleLogo}
      />
    </div>
  );
};

export default Card;
