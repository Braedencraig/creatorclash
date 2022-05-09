import React from "react";

export default function Character({ name, id, imgSrc, opponent }) {
  return (
    <div data-opponent={opponent} id={id} className={`character ${id === "akuma" && "active"}`}>
      <img loading="lazy" className={`character__img ${imgSrc.indexOf("base64") !== -1 && "question-img"}`} src={imgSrc} alt={name} />
      <p className="character__name">{name}</p>
    </div>
  );
}
