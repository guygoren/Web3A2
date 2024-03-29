import React from "react";
import { YearSelector } from "./YearSelector";
import { FavoritesButt } from "./FavoritesButt";
import { AboutButt } from "./AboutButt";
import "../styles/Header.css";

export const Header = () => {

  return (
    <>
      <div className="navbar">
        <div className="box" id="box1">
          <YearSelector />
        </div>
        <div className="box" id="box2">
          F1 Dashboard Project
        </div>
        <div className="box button-container" id="box3">
          <FavoritesButt />
          <AboutButt />
        </div>
      </div>
    </>
  );
}
