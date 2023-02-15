import React from "react";
import "./Home.scss";
import Header from "./Header";
import Row from "./Row";

const Home = () => {
  return (
    <section className="section-home">
      <Header />

      <div className="banner">
        <h1>Stranger Things</h1>
        <Row />
      </div>
    </section>
  );
};

export default Home;
