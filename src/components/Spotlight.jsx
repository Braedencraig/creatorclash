import React from "react";

export default function Spotlight({ name, id, imgSrc, opponent, player }) {
  return (
    <div data-opponent={opponent} id={id} className={`character__spotlight ${player === 1 ? "player1" : "player2"}`}>
      <img className={`character__img ${imgSrc.indexOf("base64") !== -1 && "question-img-spotlight"}`} src={imgSrc} alt={name} />
      <p className="spotlight__text">{name.toUpperCase()}</p>
    </div>
  );
}
