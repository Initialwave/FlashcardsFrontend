import React, { useEffect, useState } from "react";
import menuLogo from "../pics/menu.svg";

const Settings = ({ doFilter }) => {
  const [menu, setMenu] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  let checkboxChangeHandler = e => {
    let selection = e.target.id;
    if (e.target.checked) {
      setCheckedBoxes([...checkedBoxes, selection]);
    } else {
      let newArr = [...checkedBoxes];
      newArr.splice(newArr.indexOf(selection), 1);
      setCheckedBoxes(newArr);
    }
  };

  useEffect(() => {
    doFilter(checkedBoxes);
  }, [checkedBoxes]);

  let width = windowWidth / 3;
  let spaceUsed = 0;
  let numRows = 1;

  for (let i = 0; i < 16; i++) {
    spaceUsed += 110;
    if (spaceUsed >= width) {
      numRows++;
      spaceUsed = 110;
    }
  }

  let mobile = windowWidth < 700;
  let height = mobile
    ? { minHeight: "100vh", maxHeight: "100vh" }
    : { minHeight: numRows * 45 + 30, maxHeight: numRows * 45 + 30 };
  let buttonPos = menu ? { top: height.minHeight + 10 } : { top: "10px" };
  buttonPos = menu && mobile ? { top: "Calc(100% - 2em - 10px)" } : buttonPos;

  useEffect(() => {
    const resizeHandler = () => {
      let width1 = document.documentElement.clientWidth;
      if (Math.abs(width1 - windowWidth) > 50) {
        setWindowWidth(width1);
      }
    };

    window.removeEventListener("resize", resizeHandler);

    window.addEventListener("resize", resizeHandler);
  }, []);

  let toggleMenu = () => {
    setMenu(!menu);
  };
  let toolbarClass = menu ? "" : "hidden";

  return (
    <>
      <div id="toolbar" className={toolbarClass} style={height}>
        <div className="category-container">
          <h3 className="category-title">Java</h3>
          <div className="input-section">
            <div className="input-center">
              <div className="input-container">
                <label htmlFor="Core Java">Core Java</label>
                <input
                  type="checkbox"
                  id="Core Java"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="Servlet">Servlet</label>
                <input
                  type="checkbox"
                  id="Servlet"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="JSP">JSP</label>
                <input
                  type="checkbox"
                  id="JSP"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="EJB">EJB</label>
                <input
                  type="checkbox"
                  id="EJB"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="Struts">Struts</label>
                <input
                  type="checkbox"
                  id="Struts"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="Hibernate">Hibernate</label>
                <input
                  type="checkbox"
                  id="Hibernate"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Spring">Spring</label>
                <input
                  type="checkbox"
                  id="Spring"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="Junit">Junit</label>
                <input
                  type="checkbox"
                  id="Junit"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="Maven">Maven</label>
                <input
                  type="checkbox"
                  id="Maven"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>

              <div className="input-container">
                <label htmlFor="JSF">JSF</label>
                <input
                  type="checkbox"
                  id="JSF"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="middle-divide" className="category-container">
          <h3 className="category-title">Web</h3>
          <div className="input-section">
            <div className="input-center">
              <div className="input-container">
                <label htmlFor="HTML">HTML</label>
                <input
                  type="checkbox"
                  id="HTML"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="CSS">CSS</label>
                <input
                  type="checkbox"
                  id="CSS"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="JavaScript">JavaScript</label>
                <input
                  type="checkbox"
                  id="JavaScript"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="jQuery">jQuery</label>
                <input
                  type="checkbox"
                  id="jQuery"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="XML">XML</label>
                <input
                  type="checkbox"
                  id="XML"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="AJAX">AJAX</label>
                <input
                  type="checkbox"
                  id="AJAX"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Web Serv-">Web Serv-</label>
                <input
                  type="checkbox"
                  id="Web Serv-"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="AngularJS">AngularJS</label>
                <input
                  type="checkbox"
                  id="AngularJS"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Node.js">Node.js</label>
                <input
                  type="checkbox"
                  id="Node.js"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Backbone">Backbone</label>
                <input
                  type="checkbox"
                  id="Backbone"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Sass">Sass</label>
                <input
                  type="checkbox"
                  id="Sass"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Less">Less</label>
                <input
                  type="checkbox"
                  id="Less"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="XSLT">XSLT</label>
                <input
                  type="checkbox"
                  id="XSLT"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="XPath">XPath</label>
                <input
                  type="checkbox"
                  id="XPath"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="XQuery">XQuery</label>
                <input
                  type="checkbox"
                  id="XQuery"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="XHTML">XHTML</label>
                <input
                  type="checkbox"
                  id="XHTML"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="category-container">
          <h3 className="category-title">Database</h3>
          <div className="input-section">
            <div className="input-center">
              <div className="input-container">
                <label htmlFor="SQL">SQL</label>
                <input
                  type="checkbox"
                  id="SQL"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="MySQL">MySQL</label>
                <input
                  type="checkbox"
                  id="MySQL"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Oracle">Oracle</label>
                <input
                  type="checkbox"
                  id="Oracle"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="SQL Server">SQL Server</label>
                <input
                  type="checkbox"
                  id="SQL Server"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Cassandra">Cassandra</label>
                <input
                  type="checkbox"
                  id="Cassandra"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="SQLite">SQLite</label>
                <input
                  type="checkbox"
                  id="SQLite"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="MongoDB">MongoDB</label>
                <input
                  type="checkbox"
                  id="MongoDB"
                  onChange={e => checkboxChangeHandler(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-icon-div" style={buttonPos} onClick={() => toggleMenu()}>
        <img
          id="menu-icon"
          src={menuLogo}
          alt="minimize/maximize the selection menu"
        />
      </div>
    </>
  );
};

export default Settings;
