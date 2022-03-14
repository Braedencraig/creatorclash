/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Character from "./components/Character";
import Player from "./components/Player";
import Spotlight from "./components/Spotlight";
import Show from "./components/Show";
import Head2Head from "./components/Head2Head";
import idubbbztv from "./assets/idubbbz.png";
import drmike from "./assets/drmike.jpg";
// import epj from "./assets/epj.jpg";
import question from "./assets/question.png";
import alexwassabi from "./assets/alexwasabi.jpg";
import erik from "./assets/internetcommentetiquette.png";
import anything4views from "./assets/anything4views.jpg";
import hundar from "./assets/hundar.jpg";
import ab from "./assets/ab.jpg";
import alex from "./assets/ididathing.png";
import james from "./assets/odd1stout.jpg";
import reeves from "./assets/michaelreeves.jpg";
import stephan from "./assets/grahamstephan.jpg";
import hanson from "./assets/arinhanson.jpeg";
import harley from "./assets/harley.jpg";
import minx from "./assets/justaminx.jpg";
import haley from "./assets/yodelinghaley.png";
import magee from "./assets/ryanmagee.jpg";
import ernst from "./assets/alexernst.jpg";
import barnatt from "./assets/nathanbarnatt.jpeg";
import watson from "./assets/mattwatson.jpg";
// import chillz from "./assets/chillz.jpeg";
import esfand from "./assets/esfand.jpg";
import logo from "./assets/creator-clash-logo.png";
import rgt from "./assets/rgt.png";

import "./App.css";

function App() {
  const characterArray = [
    {
      name: "Idubbbz",
      id: "idubbbztv",
      imgSrc: idubbbztv,
      opponent: "drmike",
      youtube: "https://www.youtube.com/c/iDubbbzTV",
    },
    {
      name: "Dr. Mike",
      id: "drmike",
      imgSrc: drmike,
      opponent: "idubbbztv",
      youtube: "https://www.youtube.com/c/DoctorMike",
    },
    {
      name: "Harley (Epic Meal Time)",
      id: "harley",
      imgSrc: harley,
      opponent: "hanson",
      youtube: "https://www.youtube.com/c/epicmealtime",
    },
    {
      name: "Egoraptor",
      id: "hanson",
      imgSrc: hanson,
      opponent: "harley",
      youtube: "https://www.youtube.com/user/GameGrumps",
    },
    {
      // name: "Emmanuel Pacquiao Jr.",
      name: "???",
      id: "epj",
      imgSrc: question,
      opponent: "alexwassabi",
      youtube: "https://youtu.be/dQw4w9WgXcQ",
      // youtube: "https://www.youtube.com/c/JimuelPacquiao01",
    },
    {
      name: "Alex Wassabi",
      id: "alexwassabi",
      imgSrc: alexwassabi,
      opponent: "epj",
      youtube: "https://www.youtube.com/c/Wassabi",
    },
    {
      name: "Anything4Views",
      id: "anything4views",
      imgSrc: anything4views,
      opponent: "erik",
      youtube: "https://www.youtube.com/c/anything4views",
    },
    {
      name: "Internet Comment Etiquette",
      id: "erik",
      imgSrc: erik,
      opponent: "anything4views",
      youtube: "https://www.youtube.com/c/ErikTheElectric",
    },
    {
      name: "Hundar",
      id: "hundar",
      imgSrc: hundar,
      opponent: "ab",
      youtube: "https://www.youtube.com/c/MuscleParty",
    },
    {
      name: "AB (H3 Podcast)",
      id: "ab",
      imgSrc: ab,
      opponent: "hundar",
      youtube: "https://www.youtube.com/c/ABalanceDramaNewsLive/videos",
    },
    {
      name: "Yodeling Haley",
      id: "haley",
      imgSrc: haley,
      opponent: "minx",
      youtube: "https://www.youtube.com/channel/UCsNOMACOZuOMd3snYwjlX9w",
    },
    {
      name: "Justaminx",
      id: "minx",
      imgSrc: minx,
      opponent: "haley",
      youtube: "https://www.youtube.com/c/JustaMinx",
    },
    {
      name: "Ryan Magee",
      id: "magee",
      imgSrc: magee,
      opponent: "ernst",
      youtube: "https://www.youtube.com/c/SuperMegaOfficial",
    },
    {
      name: "Alex Ernst",
      id: "ernst",
      imgSrc: ernst,
      opponent: "magee",
      youtube: "https://www.youtube.com/user/TheAlexErnstShow",
    },
    {
      name: "Matt Watson",
      id: "watson",
      imgSrc: watson,
      opponent: "barnatt",
      youtube: "https://www.youtube.com/c/MattMakesMovies",
    },
    {
      name: "Dad",
      id: "barnatt",
      imgSrc: barnatt,
      opponent: "watson",
      youtube: "https://www.youtube.com/c/barnatt",
    },
    {
      name: "I did a thing",
      id: "alex",
      imgSrc: alex,
      opponent: "james",
      youtube: "https://www.youtube.com/c/Ididathing",
    },
    {
      name: "TheOdd1sOut",
      id: "james",
      imgSrc: james,
      opponent: "alex",
      youtube: "https://www.youtube.com/c/theodd1sout",
    },
    {
      name: "Michael Reeves",
      id: "reeves",
      imgSrc: reeves,
      opponent: "stephan",
      youtube: "https://www.youtube.com/c/MichaelReeves",
    },
    {
      name: "Graham Stephan",
      id: "stephan",
      imgSrc: stephan,
      opponent: "reeves",
      youtube: "https://www.youtube.com/c/GrahamStephan",
    },
    {
      // name: "Chillz",
      name: "???",
      id: "chillz",
      imgSrc: question,
      opponent: "esfand",
      youtube: "https://youtu.be/dQw4w9WgXcQ",
    },
    {
      name: "Esfand",
      id: "esfand",
      imgSrc: esfand,
      opponent: "chillz",
      youtube: "https://www.youtube.com/c/EsfandTV",
    },
  ];

  const head2head = [
    [characterArray[0], characterArray[1]],
    [characterArray[2], characterArray[3]],
    [characterArray[4], characterArray[5]],
    [characterArray[6], characterArray[7]],
    [characterArray[8], characterArray[9]],
    [characterArray[10], characterArray[11]],
    [characterArray[12], characterArray[13]],
    [characterArray[14], characterArray[15]],
    [characterArray[16], characterArray[17]],
    [characterArray[18], characterArray[19]],
    [characterArray[20], characterArray[21]],
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
        <Player />
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
