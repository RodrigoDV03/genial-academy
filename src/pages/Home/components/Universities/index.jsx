import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const UniversitiesSection = () => {

  //TODO: conectar la bd
  function getUniversities() {
    return [
      'unmsm',
      'uni',
      'unac',
      'unalm',
      'unfv',
      'untels',
      'unsa',
      'une'
    ]
  }

  const UNI = getUniversities();

  function universityCard(uni_id) {
    return (
      <button className="u_card">
        <Link to={uni_id} className="link">
          <div className="u_card_img">
            <img src={`/src/assets/images/${uni_id}.png`} alt="" />
          </div>
          <div className="u_card_title">{uni_id.toUpperCase()}</div>
        </Link>
      </button>
    );
  }

  function generateGrid() {
    const html = [];
    UNI.forEach(uni_id => {
      html.push(
        universityCard(uni_id)
      );
    });
    return html;
  }

  return (
    <div className="u_screen">
      <div className="u_title">
        <p>Universidades</p>
      </div>
      <div className="u_grid">
        {generateGrid()}
      </div>
    </div>
  );
};
