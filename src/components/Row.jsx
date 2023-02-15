import React from "react";
import Card from "./Card";
const Row = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
  ];
  return (
    <>
      <h2>Popular On Netflix</h2>
      <div className="row">
        {data.map((data, idx) => (
          <>
            <Card img={data.img} key={idx} />
            <h2>Aamna</h2>
          </>
        ))}
      </div>
    </>
  );
};

export default Row;
