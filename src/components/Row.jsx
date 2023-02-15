import React from "react";
import Card from "./Card";
const Row = ({ title, data = [] }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="section-row">
      <h2>{title}</h2>
      <div className="row">
        {data.map((data, idx) => {
          return <Card img={`${imgUrl}${data.poster_path}`} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Row;
