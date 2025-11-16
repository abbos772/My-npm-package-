import React from "react";
import { BigStickerIcon } from "../../icons/svg/BigStickerIcon";
import "./BigStickerIcon.css";

const BigSticker = () => {
  return (
    <div className="bigsticker-container">
      <div className="bigsticker">
        <BigStickerIcon className="bigsticker-icon" />
      </div>
    </div>
  );
};

export default BigSticker;
