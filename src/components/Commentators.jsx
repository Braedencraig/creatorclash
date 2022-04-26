/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import akinola from "../assets/akinola.png";
import wade from "../assets/wade.png";
import faze from "../assets/faze.jpg";
import felix from "../assets/felix.jpeg";
import moist from "../assets/moist.png";
import esfand from "../assets/esfand.jpeg";
import chills from "../assets/chills.jpg";

export default function Commentators() {
  const commentatorsArray = [
    {
      name: "Akinola Verissimo",
      imgSrc: akinola,
      link: "https://akinolaverissimo.com/",
    },
    {
      name: "Wade Plemons",
      imgSrc: wade,
      link: "https://www.youtube.com/c/TheWADEConcept",
    },
    {
      name: "FaZe Sensei",
      imgSrc: faze,
      link: "https://www.youtube.com/c/FaZeSensei",
    },
    {
      name: "xQcOW",
      imgSrc: felix,
      link: "https://www.twitch.tv/xQcOW",
    },
    {
      name: "Moist Cr1TiKaL",
      imgSrc: moist,
      link: "https://www.youtube.com/user/penguinz0/featured",
    },
    {
      name: "EsfandTV",
      imgSrc: esfand,
      link: "https://www.twitch.tv/esfandtv",
    },
    {
      name: "Chills",
      imgSrc: chills,
      link: "https://www.youtube.com/c/Chills15",
    },
  ];

  return (
    <div className="commentators container">
      <div className="commentators-flex">
        {commentatorsArray.map((commentator, i) => {
          return (
            <a target="_blank" rel="noopener noreferrer" key={i} href={commentator.link} className="player character__spotlight commenter">
              <img loading="lazy" className="character__img" src={commentator.imgSrc} alt={commentator.name} />
              <p className="spotlight__text">{commentator.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
