import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/creator-clash-logo.png";
import rgt from "../assets/rgt.png";

import "../App.css";

function Home() {
  const opts = {
    // height: "390",
    // width: "640",
    // playerVars: {
    //   // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    // },
  };

  return (
    <div className="App">
      <div>
        <img className="logo container" src={logo} alt="Creator Clash Logo" />
        <h2 className="details">details coming soon</h2>
        <YouTube videoId="-MIn4wFvLM0" opts={opts} />
        <div className="flex-show">
          <div className="tickets show media">
            <Link className="ticket" exact="true" to="/press">
              MEDIA SUBMISSIONS
            </Link>
          </div>
        </div>
        <div className="inquiries container">
          <p> Sponsorship Inquiries: </p>
          <a href="mailto:creatorclash@concurrentstudios.com">
            creatorclash <span> @concurrentstudios.com </span>
          </a>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/thecreatorclash/?hl=en" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="https://twitter.com/TheCreatorClash" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} />
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
