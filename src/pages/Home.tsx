import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      메인페이지
      <div style={{display:"flex"}}>
      <button
        onClick={() => {
          navigate("/cafe");
        }}
      >
        카페
      </button>
      <button
        onClick={() => {
          navigate("/alcohol");
        }}
      >
        술집
      </button>
      <button
        onClick={() => {
          navigate("/restaurant");
        }}
      >
        식당
      </button></div>
    </div>
  );
};

export default Home;
