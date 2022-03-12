import { useEffect, useState } from "react";
import Character from "./components/Character";
import Spotlight from "./components/Spotlight";
import Show from "./components/Show";
import Head2Head from "./components/Head2Head";
import idubbbztv from "./assets/idubbbz.png";
import drmike from "./assets/drmike.jpg";
import epj from "./assets/epj.jpg";
import alexwassabi from "./assets/alexwasabi.jpg";
import erik from "./assets/internetcommentetiquette.png";
import anything4views from "./assets/anything4views.jpg";
import hundar from "./assets/hundar.jpg";
import ab from "./assets/ab.jpg";
import alex from "./assets/ididathing.png";
import james from "./assets/odd1stout.jpg";
import reeves from "./assets/michaelreeves.jpg";
import stephan from "./assets/grahamstephan.jpg";

import logo from "./assets/creator-clash-logo.png";
import rgt from "./assets/rgt.png";

import "./App.css";

function App() {
  const characterArray = [
    {
      name: "Akuma",
      id: "akuma",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/akuma.png",
      opponent: "balrog",
    },
    {
      name: "Balrog",
      id: "balrog",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/balrog.png",
      opponent: "akuma",
    },
    {
      name: "M. Bison",
      id: "bison",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/bison.png",
      opponent: "blanka",
    },
    {
      name: "Blanka",
      id: "blanka",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/blanka.png",
      opponent: "bison",
    },
    {
      name: "Cammy",
      id: "cammy",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/cammy.png",
      opponent: "chunli",
    },
    {
      name: "Chun Li",
      id: "chunli",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/chunli.png",
      opponent: "cammy",
    },
    {
      name: "Dhalsim",
      id: "dhalsim",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/dhalsim.png",
      opponent: "ehonda",
    },
    {
      name: "E. Honda",
      id: "ehonda",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ehonda.png",
      opponent: "dhalsim",
    },
    {
      name: "Evil Ryu",
      id: "evilryu",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.pnevilg.png",
      opponent: "guile",
    },
    {
      name: "Guile",
      id: "guile",
      imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/guile.png",
      opponent: "evilryu",
    },
    {
      name: "Idubbbztv",
      id: "idubbbztv",
      imgSrc: idubbbztv,
      opponent: "drmike",
    },
    {
      name: "Dr. Mike",
      id: "drmike",
      imgSrc: drmike,
      opponent: "idubbbztv",
    },
    {
      name: "Emmanuel Pacquiao Jr.",
      id: "epj",
      imgSrc: epj,
      opponent: "alexwassabi",
    },
    {
      name: "Alex Wassabi",
      id: "alexwassabi",
      imgSrc: alexwassabi,
      opponent: "epj",
    },
    {
      name: "Anything4views",
      id: "anything4views",
      imgSrc: anything4views,
      opponent: "erik",
    },
    {
      name: "Erik",
      id: "erik",
      imgSrc: erik,
      opponent: "anything4views",
    },
    {
      name: "Brett Hundar",
      id: "hundar",
      imgSrc: hundar,
      opponent: "ab",
    },
    {
      name: "AB (H3H3)",
      id: "ab",
      imgSrc: ab,
      opponent: "hundar",
    },
    {
      name: "Alex (I Did A Thing)",
      id: "alex",
      imgSrc: alex,
      opponent: "james",
    },
    {
      name: "James (TheOdd1sOut)",
      id: "james",
      imgSrc: james,
      opponent: "alex",
    },
    {
      name: "Michael Reeves",
      id: "reeves",
      imgSrc: reeves,
      opponent: "stephan",
    },
    {
      name: "Graham Stephan",
      id: "stephan",
      imgSrc: stephan,
      opponent: "reeves",
    },
  ];

  const head2head = [
    [characterArray[0], characterArray[1]],
    [characterArray[2], characterArray[3]],
    [characterArray[4], characterArray[5]],
    [characterArray[6], characterArray[7]],
    [characterArray[8], characterArray[9]],
    [characterArray[10], characterArray[11]],
  ];

  const [playerOne, setPlayerOne] = useState(characterArray[0]);
  const [playerTwo, setPlayerTwo] = useState(characterArray[1]);

  useEffect(() => {
    const characterList = document.querySelectorAll(".character");

    characterList.forEach((character) => {
      character.addEventListener("click", () => {
        if (document.querySelector(".character.active")) {
          document.querySelector(".character.active").classList.remove("active");
        }
        character.classList.add("active");
        setPlayerOne(characterArray.find((player) => player.id === character.id));
        setPlayerTwo(characterArray.find((player) => player.id === character.dataset["opponent"]));
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="Creator Clash Logo" />
        <div className="display-character">
          <div className="player player__one">
            <Spotlight
              key={playerOne.name}
              name={playerOne.name}
              id={playerOne.id}
              imgSrc={playerOne.imgSrc}
              opponent={playerOne.opponent}
              player={1}
            />
          </div>
          <div className="player player__two">
            <Spotlight
              key={playerTwo.name}
              name={playerTwo.name}
              id={playerTwo.id}
              imgSrc={playerTwo.imgSrc}
              opponent={playerTwo.opponent}
              player={2}
            />
          </div>
        </div>
        <h1 className="title">Player Select</h1>
        <div className="select-container">
          {characterArray.map((character) => {
            return (
              <Character
                key={character.name}
                name={character.name}
                id={character.id}
                imgSrc={character.imgSrc}
                opponent={character.opponent}
              />
            );
          })}
        </div>
        <Show />
        <div className="head2head">
          {head2head.map((match) => {
            return <Head2Head key={match[0].name} playerOne={match[0]} playerTwo={match[1]} />;
          })}
        </div>
        <a href="https://www.realgoodtouring.com/" target="_blank" rel="noopener noreferrer">
          <img className="rgt" src={rgt} alt="Real Good Touring" />
        </a>
      </div>
    </div>
  );
}

export default App;
