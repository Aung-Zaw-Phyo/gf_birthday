import React, { useRef, useState } from "react";
import audio from "./assets/audio/audio_3.mp3";
import svg from "./assets/images/heart_1.svg";
import person from "./assets/images/person.jpg";
import ParticleJs from "./components/ParticleJs";
import particleConfig2 from "./config/particle-config-2";
import particlesConfig from "./config/particle-config";

function App() {
  const [isChanged, setIsChanged] = useState(false);
  const audioRef = useRef();
  const play = () => {
    setIsChanged(true);
    document.getElementById("audio").play();
  };
  return (
    <div className="App">
      <ParticleJs config={isChanged ? particleConfig2 : particlesConfig} />
      <div className="content text-center container mt-[50px] mb-6 text-white">
        <audio
          ref={audioRef}
          id="audio"
          src={audio}
          controls
          autoPlay
          loop
          hidden
        ></audio>
        <img
          className="mx-auto relative rounded-full mb-3 w-[200px] lg:w-[240px]"
          src={person}
          alt=""
        />

        <div className="title bouncing-text text-center mb-2 text-[28px] md:text-[50px] lg:text-[70px]">
          <span className="a">H</span>
          <span className="b">A</span>
          <span className="c">P</span>
          <span className="d">P</span>
          <span className="e">Y</span>
          <span> </span>
          <span className="f">B</span>
          <span className="g">I</span>
          <span className="h">R</span>
          <span className="i">T</span>
          <span className="j">H</span>
          <span className="k">D</span>
          <span className="l">A</span>
          <span className="m">Y</span>
          <span> </span>
          <span className="n">T</span>
          <span className="o">O</span>
          <span> </span>
          <span className="p">Y</span>
          <span className="q">O</span>
          <span className="r">U</span>
        </div>

        <p className="message mb-4 w-full lg:w-[90%] mx-auto md:text-[22px]">
          “ Happy birthday, my dear girl! <br />
          Life may present challenges, but I believe in you can overcome them .
          <br />
          You deserve all the happiness and success that life has to offer.
          <br />
          May the coming year be filled with exciting adventures, new
          opportunities,
          <br /> and moments of personal growth. <br /> Cheers to you and the
          wonderful journey ahead! 🎈 ”
        </p>

        {isChanged && (
          <img
            className="heart mx-auto w-[100px] md:w-[140px]"
            src={svg}
            alt=""
          />
        )}
        {!isChanged && (
          <button onClick={play} className="relative">
            TOUCH ME
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
