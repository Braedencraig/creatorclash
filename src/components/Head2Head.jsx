import React from "react";

export default function Head2Head({ playerOne, playerTwo }) {
  return (
    <div className="matchup">
      <div className="">
        <img className="" src={playerOne.imgSrc} alt={playerOne.name} />
        <p className="">{playerOne.name.toUpperCase()}</p>
      </div>
      <h2>VS</h2>
      <div className="">
        <img className="" src={playerTwo.imgSrc} alt={playerTwo.name} />
        <p className="">{playerTwo.name.toUpperCase()}</p>
      </div>
    </div>
  );
}
