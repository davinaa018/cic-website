import React from "react";
import Galley from "../components/Galley";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-center pt-10">
        <h1 className="font-bold text-xl underline pb-5 xl:pr-12">Gallery</h1>
        <Galley />
      </div>
    </div>
  );
};

export default Home;
