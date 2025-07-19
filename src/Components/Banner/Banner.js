import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { BannerImageUrl } from "../../Constants/Const";
import YouTube from "react-youtube";
import { API_KEY } from "../../Constants/Const";

function Banner(props) {
  useEffect(() => {
    axios.get(props.url).then((response1) => {
      axios.get(
          `https://api.themoviedb.org/3/movie/${response1.data.results[0].id}/videos${API_KEY}`
        )
        .then((response) => {
          setbanner({
            title: response1.data.results[0].title,
            overview: response1.data.results[0].overview,
            image: response1.data.results[0].backdrop_path,
            key: response.data.results[0].key,
          });
        });
    });
  }, []);

  const [banner, setbanner] = useState([]);
   
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [tailer, settailer] = useState({ hiden: false });
  const Trailer = () => {
    settailer({ hiden: true });
  };

  return (
    <div id="about"
      className="banner"
      style={{
        backgroundImage: `url(${
          props.movie
            ? BannerImageUrl + props.movie.image
            : BannerImageUrl + banner.image
        })`,
      }}
    >
      <div className="content">
        <h1>{props.movie ? props.movie.title : banner.title}</h1>
        <h3>{props.movie ? props.movie.overview : banner.overview}</h3>
      </div>
      <div className="bannerbuttons">
        <button className="play">Play</button>
        <button onClick={Trailer} className="list">
          Trailer
        </button>
      </div>
      <div className="shadow"></div>

      {tailer.hiden ? (
        <div className="youtube">
          <YouTube
            videoId={props.movie ? props.movie.key : banner.key}
            opts={opts}
          />
          <button
            onClick={() => {
              settailer({ hiden: false });
            }}
            class="btn"
          >
            <i class="fa fa-close"></i>{" "}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Banner;
