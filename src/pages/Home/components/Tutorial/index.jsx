import React, { forwardRef } from "react";
import "./styles.css";

export const TutorialSection = forwardRef((props, ref) => {
  return (
    <div className="t_screen" ref={ref}>
      <div className="t_title">
        <p>Tutorial</p>
      </div>
      <div className="t_video_container">
        <div className="square"></div>
        <iframe
          className="t_video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0gYmLL7xal8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="square"></div>
      </div>
    </div>
  );
});
