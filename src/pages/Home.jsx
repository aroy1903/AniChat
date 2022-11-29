import React from 'react';
import anime from '../assets/aniback.jpg';

export default function Home() {
  return (
    <div
      className=" flex-grow bg-no-repeat  bg-cover text-white flex justify-center items-center"
      style={{
        backgroundImage: `url(${anime})`,
      }}
    >
      <div className=" flex flex-col justify-center text-center bg-black bg-opacity-50">
        <h1 className=" text-7xl font-semibold">Welcome to AniChat</h1>
        <h3 className=" text-2xl">
          A forum for anime lovers to come together.
        </h3>
      </div>
    </div>
  );
}
