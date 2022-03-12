import React from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Head2Head({ playerOne, playerTwo }) {
  return (
    <div className="matchup">
      <div className="matchup__player">
        <img className="" src={playerOne.imgSrc} alt={playerOne.name} />
        {playerOne.id === "epj" ? (
          <p>
            EMMANUEL<span>PACQUIAO JR.</span>
          </p>
        ) : (
          <p>{playerOne.name.toUpperCase()}</p>
        )}
        {playerOne.youtube && (
          <a href={playerOne.youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        )}
      </div>
      <h2 className="vs">VS</h2>
      <div className="matchup__player">
        <img className="" src={playerTwo.imgSrc} alt={playerTwo.name} />
        <p className="">{playerTwo.name.toUpperCase()}</p>
        {playerTwo.youtube && (
          <a href={playerTwo.youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        )}
      </div>
    </div>
  );
}
