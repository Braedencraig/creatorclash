/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show() {
  return (
    <div className="show">
      <h2>SATURDAY, MAY 14th</h2>
      <h2>TAMPA, FL</h2>
      <h2>YUENGLING CENTER</h2>
      <div className="tickets">
        <a className="ticket" href="https://momenthouse.com/creatorclash" target="_blank" rel="noopener noreferrer">
          TICKETS TO STREAM
        </a>
        <a className="ticket">
          TICKETS TO EVENT
          <span>On Sale April 13th</span>
        </a>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/thecreatorclash/?hl=en" target="_blank" rel="noopener noreferrer">
          {" "}
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/TheCreatorClash" target="_blank" rel="noopener noreferrer">
          {" "}
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
