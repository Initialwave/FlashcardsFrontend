import React, { useEffect, useRef, useState } from "react";
import CardsDisplay from "./Components/CardsDisplay";
import Settings from "./Components/Settings";
import "./css/app.css";
import "./css/toolbar.css";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [em, setEm] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const tempData = useRef([]);

  useEffect(() => {
    fetch("/questions/getAll")
      .then(r => r.json())
      .then(json => {
        let text = JSON.stringify(json).replaceAll(
          "<textarea",
          "<div class='my-code-block'"
        );
        text = text.replaceAll("Test it Now", "");
        text = text.replaceAll("textarea", "div");
        let json1 = JSON.parse(text);
        setData(json1);
        let temporaryCards = [];
        let shuffled = shuffleArray(json1);
        for (let i = 0; i < 10; i++) {
          shuffled[i].number = i;
          temporaryCards.push(shuffled[i]);
        }
        setFilteredData(temporaryCards);
      })
      .catch(err => console.log(err));

    setEm(document.getElementById("emDiv").clientHeight);
    document.getElementById("emDiv").remove();
  }, []);

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  let filterData = array => {
    if (data !== null) {
      let filtered = data.filter(e => {
        let contains = false;
        for (let i = 0; i < array.length; i++) {
          if (e["subCategory"] === array[i]) {
            contains = true;
            break;
          }
        }
        return contains;
      });
      let shuffled = shuffleArray(filtered);
      for (let i = 0; i < shuffled.length; i++) {
        shuffled[i].number = i;
      }
      setRefresh(true);
      setFilteredData(null);
      tempData.current = shuffled;
    }
  };

  if (refresh) {
    setTimeout(() => {
      setFilteredData(tempData.current);
      setRefresh(false);
    }, 1);
  }

  return (
    <>
      <Settings doFilter={array => filterData(array)} />
      <div
        id="emDiv"
        style={{
          minHeight: "1em",
          maxHeight: "1em",
          minWidth: "1em",
          maxWidth: "1em",
          zIndex: -1,
          position: "absolute",
        }}
      ></div>
      {filteredData ? <CardsDisplay data={filteredData} em={em} /> : <></>}
    </>
  );
}

export default App;
