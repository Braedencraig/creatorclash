import React from "react";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Head2Head({ playerOne, playerTwo }) {
  return (
    <>
      {playerOne.name === "Idubbbz" && <h3 className="event">MAIN EVENT</h3>}
      {playerOne.name === "Harley (Epic Meal Time)" && <h3 className="event">CO-MAIN EVENT</h3>}
      <h3>{playerOne.class}</h3>
      <div className="matchup">
        <div className="matchup__player">
          <img loading="lazy" className={`${playerOne.imgSrc.indexOf("base64") !== -1 && "question-img-spotlight head-img"}`} src={playerOne.imgSrc} alt={playerOne.name} />
          <p>{playerOne.name.toUpperCase()}</p>
          {playerOne.youtube && (
            <a href={playerOne.youtube} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          )}
        </div>
        <h2 className="vs">VS</h2>
        <div className="matchup__player">
          <img loading="lazy" className={`${playerTwo.imgSrc.indexOf("base64") !== -1 && "question-img-spotlight head-img"}`} src={playerTwo.imgSrc} alt={playerTwo.name} />
          <p className="">{playerTwo.name.toUpperCase()}</p>
          {playerTwo.youtube && (
            <a href={playerTwo.youtube} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          )}
        </div>
      </div>
    </>
  );
}
