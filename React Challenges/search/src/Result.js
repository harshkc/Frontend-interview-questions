import React from "react";
import "./App.css";

const Result = function ({video}) {
  return (
    <div className='content'>
      <img alt='thumbnail' className='image' src={video.thumbnailUrl} />
      <p>{video.title}</p>
    </div>
  );
};

export {Result};
