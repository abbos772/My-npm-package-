import React from "react";
import "./StickerIcon.css";
import StickersMainIcon from "../svg/StickersMainIcon";
import AddStickerIcon from "../svg/AddStickerIcon";

const Stickers = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <div className="Stic">

          <StickersMainIcon className="notfound-svg" />

          <p className="card_flex">
            Для загрузки в набор нажмите на один или несколько стикеров или перетяните их в эту область
          </p>

          <div className="addStick1">
            <AddStickerIcon />
            <h4>Добавить стикеры</h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stickers;
