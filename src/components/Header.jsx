import React from "react";

const Header = () => {
  return (
    <div className="w-full border-b-4 border-indigo-500 shadow-lg py-4 fixed top-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold uppercase text-white drop-shadow-lg">
          Subodh Blogs
        </h1>
        <p className="text-white mt-2 font-semibold tracking-wide">
          Your daily dose of tech and coding insights
        </p>
      </header>
    </div>
  );
}

export default Header;
