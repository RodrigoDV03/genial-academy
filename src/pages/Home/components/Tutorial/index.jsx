import React from "react";
import "./styles.css";

export const TutorialSection = () => {
  return (
    <div className="t_screen">
      <div className="t_title">
        <p>Tutorial</p>
      </div>
      <div className="t_video_container">
        <div className="square"></div>
        <iframe className="t_video" src="https://www.youtube.com/embed/yG7MPEQm1-w" frameborder="0"></iframe>
        <div className="square"></div>
      </div>
    </div>
  );
};