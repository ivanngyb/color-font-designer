/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import ColorCards from "./ColorCards";

const Screen = () => {
  var colorsGet = [];

  const [colors, setCoolorsLink] = useState([]);

  const [newColor, updateScreenColor] = useState("");

  const [newFontColor, setFontColor] = useState("#000");

  const [newFontSize, setFontSize] = useState(50);

  const updateFontSize = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const getColors = (colors) => {
    var linkEnd = colors.substring(colors.lastIndexOf("/") + 1, colors.length);

    var linkSplit = linkEnd.split("-");
    console.log(linkSplit);
    colorsGet = linkSplit;
    setCoolorsLink(linkSplit);
  };

  const updateColor = (newColor) => {
    console.log(newColor);
    updateScreenColor(newColor);
  };

  const updateFontColor = (newFontColor) => {
    setFontColor(newFontColor);
  };

  return (
    <div>
      <div
        className="screen"
        css={css`
          width: 100%;
          height: 300px;
          background-color: #${newColor};
          border: 2px solid black;
          margin: 1em 0px 1em 0px;
        `}
      >
        <p
          css={css`
            color: #${newFontColor};
            font-size: ${newFontSize}px;
          `}
        >
          ABCdef
        </p>
      </div>
      <form>
        <div>
          <label>Coolors Link</label>
          <input
            type="text"
            placeholder="Coolors link"
            onChange={(e) => {
              getColors(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Font Colour</label>
          <input
            type="text"
            placeholder="Hex for font colour"
            onChange={(e) => {
              updateFontColor(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Font Size</label>
          <input
            type="range"
            min="10"
            max="100"
            id="fontSize"
            onChange={(e) => updateFontSize(e.target.value)}
          />
          <p style={{ display: "inline" }}>{newFontSize}</p>
        </div>
      </form>
      <h3>{colors.length > 0 ? "Change Background Colour" : ""}</h3>
      <div className="color-card-section">
        <ColorCards colors={colors} updateColor={updateColor} />
      </div>
    </div>
  );
};

export default Screen;
