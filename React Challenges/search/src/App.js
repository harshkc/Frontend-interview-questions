import "./App.css";
import React from "react";
import {Result} from "./Result";

export default function App() {
  const [inputVal, setinputVal] = React.useState("");
  const [videos, setVideos] = React.useState([]);
  const [tempVideo, settempVideos] = React.useState([]);
  const [prevValue, setprevValue] = React.useState("");

  const fetchVideos = async function () {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const jsonData = await data.json();
    setVideos(jsonData);
    settempVideos(jsonData);
  };
  React.useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className='App'>
      <input
        value={inputVal}
        onChange={(e) => {
          setinputVal(e.target.value);
          console.log(e.target.value);
          setVideos(
            tempVideo.filter((current) => {
              return current.title.includes(e.target.value);
            })
          );
        }}
      />
      <button
        onClick={() => {
          setprevValue(inputVal);
        }}
      >
        {" "}
        Search
      </button>
      {inputVal.length > 0 &&
        videos.map((video) => {
          return <Result key={video.id} video={video} />;
        })}
      <div className='prev'>
        <p>Previous Value:</p>
        <p>{prevValue}</p>
      </div>
    </div>
  );
}
