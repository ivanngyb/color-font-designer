/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ColorCard = ({ cardColor, updateColor }) => {
  return (
    <div onClick={() => updateColor(cardColor)}>
      <div
        css={css`
          width: 100px;
          height: 100px;
          background-color: #${cardColor};
          cursor: pointer;
        `}
        className="color-card"
      ></div>
      <h5
        css={css`
          text-align: center;
        `}
      >
        {cardColor}
      </h5>
    </div>
  );
};

export default ColorCard;
