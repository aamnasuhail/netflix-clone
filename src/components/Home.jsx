import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import Header from "./Header";
import Row from "./Row";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "619d6dc4f63fc4ed6e0feedb85e4c7f4";
const upcoming = "upcoming";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${URL}/movie/${upcoming}?api_key=${API_KEY}&language=en-US`
      );
      setUpcomingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${URL}/movie/${popular}?api_key=${API_KEY}&language=en-US`
      );
      setPopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${URL}/movie/${topRated}?api_key=${API_KEY}&language=en-US`
      );
      setTopRatedMovies(results);
    };
    fetchUpcoming();
    fetchPopular();
    fetchTopRated();
  }, []);

  return (
    <section className="section-home">
      <Header />

      <div className="banner-box">
        <div className="banner">
          <h1>Stranger Things</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            voluptates minima, quae modi quas magni? Suscipit, cum? Expedita
            corrupti totam doloremque beatae aut, ratione ducimus quos earum
            explicabo, velit autem.
          </p>
        </div>
      </div>
      <div className="movies">
        <Row data={upcomingMovies} title="Upcoming Movies" />
        <Row data={popularMovies} title="Popular Movies" />
        <Row data={topRatedMovies} title="Top Rated Movies"></Row>
      </div>
    </section>
  );
};

export default Home;
