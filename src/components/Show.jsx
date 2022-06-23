/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show() {
  return (
    <div className="show">
      <div className="container">
        <div className="flex-show">
          {/* <div className="event-info">
            <h2>SATURDAY,MAY 14th</h2>
            <h2>TAMPA,FL</h2>
            <h2>YUENGLING CENTER</h2>
          </div> */}
          {/* <div className="socials">
            <a href="https://www.instagram.com/thecreatorclash/?hl=en" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="https://twitter.com/TheCreatorClash" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </div> */}
        </div>
        {/* <div className="flex-show">
          <div className="tickets">
            <a className="ticket" href="https://momenthouse.com/creatorclash" target="_blank" rel="noopener noreferrer">
              TICKETS TO STREAM
            </a>
            <a href="https://www.ticketmaster.com/event/0D005C8BED38E6D0" target="_blank" rel="noopener noreferrer" className="ticket">
              TICKETS TO EVENT
            </a>
            <Link className="ticket" exact="true" to="/press">
              MEDIA SUBMISSIONS
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
