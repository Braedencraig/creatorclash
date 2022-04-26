/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Character from "../components/Character";
import Spotlight from "../components/Spotlight";
import Commentators from "../components/Commentators";
import Show from "../components/Show";
import Head2Head from "../components/Head2Head";
import idubbbztv from "../assets/idubbbz.png";
import drmike from "../assets/drmike.jpg";
import question from "../assets/question2.png";
import hundar from "../assets/hundar.png";
import ab from "../assets/ab.jpg";
import dj from "../assets/dj.png";
import alex from "../assets/ididathing.png";
import james from "../assets/odd1stout.jpg";
import reeves from "../assets/michaelreeves.jpg";
import stephan from "../assets/grahamstephan.jpg";
import hanson from "../assets/arinhanson.jpg";
import harley from "../assets/harley.jpg";
import minx from "../assets/justaminx.png";
import erik from "../assets/erik.png";
import haley from "../assets/yodelinghaley.png";
import magee from "../assets/ryanmagee.png";
import ernst from "../assets/alexernst.jpg";
import barnatt from "../assets/dad.png";
import watson from "../assets/mattwatson.png";
import logo from "../assets/creator-clash-logo.png";
import rgt from "../assets/rgt.png";

import "../App.css";

function Home() {
  const characterArray = [
    {
      name: "Idubbbz",
      id: "idubbbztv",
      imgSrc: idubbbztv,
      opponent: "drmike",
      youtube: "https://www.youtube.com/c/iDubbbzTV",
      class: "Cruiserweights",
    },
    {
      name: "Dr. Mike",
      id: "drmike",
      imgSrc: drmike,
      opponent: "idubbbztv",
      youtube: "https://www.youtube.com/c/DoctorMike",
      class: "Cruiserweights",
    },
    {
      name: "Harley (Epic Meal Time)",
      id: "harley",
      imgSrc: harley,
      opponent: "hanson",
      youtube: "https://www.youtube.com/c/epicmealtime",
      class: "Heavyweights",
    },
    {
      name: "Egoraptor",
      id: "hanson",
      imgSrc: hanson,
      opponent: "harley",
      youtube: "https://www.youtube.com/user/GameGrumps",
      class: "Heavyweights",
    },
    {
      name: "???",
      id: "one",
      imgSrc: question,
      opponent: "two",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "???",
      id: "two",
      imgSrc: question,
      opponent: "one",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "Internet Comment Etiquette",
      id: "erik",
      imgSrc: erik,
      opponent: "dj",
      youtube: "https://www.youtube.com/channel/UCyWDmyZRjrGHeKF-ofFsT5Q",
      class: "Heavyweights",
    },
    {
      name: "DJ Welch",
      id: "dj",
      imgSrc: dj,
      opponent: "erik",
      youtube: "https://www.youtube.com/channel/UCEgg3qOJI2Ep2Iq8ONE07DA",
      class: "Heavyweights",
    },
    {
      name: "Hundar",
      id: "hundar",
      imgSrc: hundar,
      opponent: "ab",
      youtube: "https://www.youtube.com/c/MuscleParty",
      class: "Cruiserweights",
    },
    {
      name: "AB (H3 Podcast)",
      id: "ab",
      imgSrc: ab,
      opponent: "hundar",
      youtube: "https://www.youtube.com/channel/UCXZX9_3OUKCklwFAOEmVgkw",
      class: "Cruiserweights",
    },
    {
      name: "Yodeling Haley",
      id: "haley",
      imgSrc: haley,
      opponent: "minx",
      youtube: "https://www.youtube.com/channel/UCsNOMACOZuOMd3snYwjlX9w",
      class: "Jr. Middleweights",
    },
    {
      name: "Justaminx",
      id: "minx",
      imgSrc: minx,
      opponent: "haley",
      youtube: "https://www.youtube.com/c/JustaMinx",
      class: "Jr. Middleweights",
    },
    {
      name: "Ryan Magee",
      id: "magee",
      imgSrc: magee,
      opponent: "ernst",
      youtube: "https://www.youtube.com/c/SuperMegaOfficial",
      class: "Cruiserweights",
    },
    {
      name: "Alex Ernst",
      id: "ernst",
      imgSrc: ernst,
      opponent: "magee",
      youtube: "https://www.youtube.com/user/TheAlexErnstShow",
      class: "Cruiserweights",
    },
    {
      name: "Matt Watson",
      id: "watson",
      imgSrc: watson,
      opponent: "barnatt",
      youtube: "https://www.youtube.com/c/MattMakesMovies",
      class: "Middleweights",
    },
    {
      name: "Dad",
      id: "barnatt",
      imgSrc: barnatt,
      opponent: "watson",
      youtube: "https://www.youtube.com/c/DadFeels",
      class: "Middleweights",
    },
    {
      name: "I did a thing",
      id: "alex",
      imgSrc: alex,
      opponent: "james",
      youtube: "https://www.youtube.com/c/Ididathing",
      class: "Cruiserweights",
    },
    {
      name: "TheOdd1sOut",
      id: "james",
      imgSrc: james,
      opponent: "alex",
      youtube: "https://www.youtube.com/c/theodd1sout",
      class: "Cruiserweights",
    },
    {
      name: "Michael Reeves",
      id: "reeves",
      imgSrc: reeves,
      opponent: "stephan",
      youtube: "https://www.youtube.com/c/MichaelReeves",
      class: "Lightweights",
    },
    {
      name: "Graham Stephan",
      id: "stephan",
      imgSrc: stephan,
      opponent: "reeves",
      youtube: "https://www.youtube.com/c/GrahamStephan",
      class: "Lightweights",
    },
  ];
  const head2head = [
    [characterArray[0], characterArray[1]],
    [characterArray[2], characterArray[3]],
    // [characterArray[4], characterArray[5]],
    [characterArray[6], characterArray[7]],
    [characterArray[8], characterArray[9]],
    [characterArray[10], characterArray[11]],
    [characterArray[12], characterArray[13]],
    [characterArray[14], characterArray[15]],
    [characterArray[16], characterArray[17]],
    [characterArray[18], characterArray[19]],
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
      <div>
        <img className="logo container" src={logo} alt="Creator Clash Logo" />
        <div className="display-character container">
          <div className="player player__one">
            <Spotlight key={playerOne.opponent} name={playerOne.name} id={playerOne.id} imgSrc={playerOne.imgSrc} opponent={playerOne.opponent} player={1} />{" "}
          </div>
          <div className="player player__two">
            <Spotlight key={playerTwo.opponent} name={playerTwo.name} id={playerTwo.id} imgSrc={playerTwo.imgSrc} opponent={playerTwo.opponent} player={2} />
          </div>
        </div>
        <h1 className="title container"> Player Select </h1>
        <div className="select-container container">
          {characterArray.map((character) => {
            return <Character key={character.opponent} name={character.name} id={character.id} imgSrc={character.imgSrc} opponent={character.opponent} />;
          })}
        </div>
        <Show />
        <h2 className="matchup-text container head2head comment">LIVE COMMENTARY & INTERVIEWS</h2>
        <Commentators />
        <h2 className="matchup-text container head2head">PLAYER MATCHUPS</h2>
        <div className="container">
          {head2head.map((match) => {
            return <Head2Head key={match[0].opponent} playerOne={match[0]} playerTwo={match[1]} />;
          })}
        </div>
        <div className="inquiries container">
          <p> Sponsorship Inquiries: </p>
          <a href="mailto:creatorclash@concurrentstudios.com">
            creatorclash <span> @concurrentstudios.com </span>
          </a>
        </div>
        <a className="container" href="https://www.realgoodtouring.com/" target="_blank" rel="noopener noreferrer">
          <img loading="lazy" className="rgt" src={rgt} alt="Real Good Touring" />
        </a>
      </div>
    </div>
  );
}

export default Home;
