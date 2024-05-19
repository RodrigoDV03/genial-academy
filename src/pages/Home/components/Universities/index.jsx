import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const UniversitiesSection = () => {
  return (
    <div className="u_screen">
      <div className="u_title">
        <p>Universidades</p>
      </div>
      <div className="u_grid">
        <button className="u_card" onClick={console.log("unmsm")}>
          <Link to={'/unmsm'} className="link_unmsm">
            <div className="u_card_img">
              <img src="/src/assets/images/unmsm.png" alt="" />
            </div>
            <div className="u_card_title">UNMSM</div>
          </Link>
        </button>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/uni.png" alt="" />
          </div>
          <div className="u_card_title">UNI</div>
        </div>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/unac.png" alt="" />
          </div>
          <div className="u_card_title">UNAC</div>
        </div>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/unalm.png" alt="" />
          </div>
          <div className="u_card_title">UNALM</div>
        </div>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/villa.png" alt="" />
          </div>
          <div className="u_card_title">UNFV</div>
        </div>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/untels.png" alt="" />
          </div>
          <div className="u_card_title">UNTELS</div>
        </div>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/unsa.png" alt="" />
          </div>
          <div className="u_card_title">UNSA</div>
        </div>

        <div className="u_card">
          <div className="u_card_img">
            <img src="/src/assets/images/une.png" alt="" />
          </div>
          <div className="u_card_title">UNE</div>
        </div>
      </div>
    </div>
  );
};
