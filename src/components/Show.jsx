import React from "react";
import { faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show() {
  return (
    <div className="show">
      <h2>SATURDAY, MAY 14th</h2>
      <h2>TAMPA, FL</h2>
      <h2>YEUNGLING CENTER</h2>
      <div className="tickets">
        <a className="ticket" href="http://google.com" target="_blank" rel="noopener noreferrer">
          TICKETS TO STREAM
        </a>
        <a className="ticket" href="http://google.com" target="_blank" rel="noopener noreferrer">
          TICKETS TO EVENT
        </a>
      </div>
      <div className="socials">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
}
