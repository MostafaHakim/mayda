import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="m-8 px-4 py-2 rounded-lg text-2xl bg-blue-300 border-2 border-blue-500 cursor-pointer top-0 left-0"
      >
        Back
      </button>
      <h2 className="text-4xl text-rose-500 text-center">
        Home pages is comming soon...
      </h2>
    </div>
  );
};

export default Home;
