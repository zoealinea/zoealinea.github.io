// HomeHero.js
import React from 'react';
import bananaMonkey from '../images/bananaMonkey.png';
import Typewriter from "typewriter-effect";

const HomeHero = () => {
  return (
    <div className="HomeHero">
      <img className="banana-monkey" src={bananaMonkey} alt="Banana Monkey" />
      <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("My Portfolio!")
                        .start();
                }}
            />
    </div>
  );
};

export default HomeHero;
