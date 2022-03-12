/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    // audio.addEventListener("ended", () => setPlaying(false));
    // return () => {
    //   audio.removeEventListener("ended", () => setPlaying(false));
    // };

    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio("https://assets.codepen.io/1158151/sf2cs_theme.aac");

  return (
    <div class="audio">
      <button onClick={toggle}>{playing ? "🔈" : "🔇"}</button>
    </div>
  );
};

export default Player;
