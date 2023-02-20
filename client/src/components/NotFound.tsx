import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="font-bold text-9xl text-red-500">404</h1>
      <h1 className="font-bold text-4xl pt-4">
        Sorry, we couldn't find this page
      </h1>
      <p className="text-base pt-5">Please use valid links </p>
      <a href="/">
        <img
          src="https://cdn3.emoji.gg/emojis/2403-capybara.png"
          className="pt-10"
          alt="capybara"
        />
      </a>
    </div>
  );
};

export default NotFound;
