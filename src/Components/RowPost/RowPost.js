import React from "react";
import "./RowPost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, ImageUrl } from "../../Constants/Const";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RowPost(props) {
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setpopularmovie(response.data.results);
      console.log(response.data);
    });
  }, []);
  const [popularmovie, setpopularmovie] = useState([]);

  const clickedmovie = (id) => {
    popularmovie.map((data) => {
      if (id == data.id) {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos${API_KEY}`)
          .then((response) => {
            props.bannermovie({
              title: data.title,
              overview: data.overview,
              image: data.backdrop_path,
              key: response.data.results[0].key,
            });
          });
      }
    });
    window.scrollTo({
      top: document.querySelector("#about").offsetTop,
      behavior: "smooth",
   })
   
  };
  return (
    <div className="RowPost">
      <h2>{props.title}</h2>
      <div className="post">
        {popularmovie.map((obj) => {
          return (
            <div className="poster">
              <img
                className="posterImage"
                src={`${ImageUrl + obj.backdrop_path}`}
                value={obj.id}
                onClick={(e) => clickedmovie(e.target.getAttribute("value"))}
                alt=""
              />
              <span className="raiting">45</span>
              <span className="PosterImageTitle">{obj.title}</span>
              <br></br>
              <span className="PosterImageRelaseDate">{obj.release_date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RowPost;
