import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { Trending, Popular, MoviesList } from "./Url";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const bannermovie = (data) => {
    setgetbannermovie(data);
  };
  const [getbannermovie, setgetbannermovie] = useState("");

  return (
    <div className="main">
      <Nav />
      <Banner movie={getbannermovie} url={MoviesList} />
      <RowPost
        bannermovie={bannermovie}
        title="Trending Movies"
        url={Trending}
      />
      <RowPost bannermovie={bannermovie} title="Popular Movies" url={Popular} />
    </div>
  );
}

export default App;
