import React, { useRef, useState } from "react";
import audio from "./assets/audio/audio_1.mp3";
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
          className="mx-auto relative rounded-full mb-3 w-[200px]"
          src={person}
          alt=""
        />

        <div className="bouncing-text text-center mb-2 text-[28px] md:text-[50px] lg:text-[70px]">
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

        <p className="message mb-4 w-full lg:w-[80%] xl:w-[60%] mx-auto text-[18px] md:text-[22px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum
          vero qui sequi non nostrum ipsam aperiam in aspernatur hic! vero qui
        </p>

        {isChanged && (
          <img className="mx-auto w-[100px] md:w-[160px]" src={svg} alt="" />
        )}
        {!isChanged && (
          <button onClick={play} className="relative">
            HIT ME
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
