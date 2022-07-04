import React from "react";
import "./index.css";

const MovieTable = () => {
  const data = [
    {character: "Neo", movie: "Matrix", imdbRating: "9"},
    {character: "John Wick", movie: "John Wick", imdbRating: "8.5"},
    {character: "John Constantine", movie: "Constantine", imdbRating: "8"},
  ];

  const handleClick = (e) => {
    console.log(e.target.parentNode.getAttribute("id"));
    if (e.target.classList.contains("btn-rating")) {
      e.stopPropagation();
      let parentNode = e.target;
      while (parentNode.tagName !== "TD") {
        parentNode = e.target.parentElement;
      }
      let index = parentNode.parentElement.getAttribute("id");
      index = parseInt(index, 10);
      alert(e.target.innerText + " : " + data[index].imdbRating);
      return;
    }
    if (e.target.tagName === "TD") {
      let index = e.target.parentElement.getAttribute("id");
      index = parseInt(index, 10);
      const movie = data[index];
      alert(movie.movie + " " + movie.character + " " + movie.imdbRating);
    }
  };

  return (
    <table onClick={handleClick}>
      <tbody>
        {data.map((movie, index) => (
          <tr id={index} key={index}>
            <td className='movie-name'>{movie.movie}</td>
            <td className='movie-char'>{movie.character}</td>
            <td className='movie-rating'>
              <span className='btn-rating'>Imdb</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
