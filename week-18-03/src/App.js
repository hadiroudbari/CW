import "./App.css";
import { useState } from "react";
const array = [
  {
    id: 1,
    src: "./images/Type=01.png",
  },
  {
    id: 2,
    src: "./images/Type=02.png",
  },
  {
    id: 3,
    src: "./images/Type=03.png",
  },
  {
    id: 4,
    src: "./images/Type=04.png",
  },
  {
    id: 5,
    src: "./images/Type=05.png",
  },
  {
    id: 6,
    src: "./images/Type=06.png",
  },
];

function App() {
  return (
    <>
      <h1 className="text-white text-4xl font-extrabold">IMAGE CAROUSEL</h1>
      <div className="bg-white w-7/12 rounded-3xl h-[65vh] flex flex-col items-center gap-12">
        <Circles />

        <Images />
        <ButtonFollow />
      </div>
      <img src="./images/Union.png" alt="union"></img>
    </>
  );
}

export default App;

function Circles() {
  return (
    <div>
      <img
        src="./images/Ellipse 1.svg"
        alt="circle"
        className="absolute right-56 bottom-28"
      ></img>
      <img
        src="./images/Ellipse 2.svg"
        alt="circle"
        className=" absolute bottom-0 left-28 z-[-5]"
      ></img>
      <img
        src="./images/Ellipse 3.png"
        alt="circle"
        className="absolute top-0 right-0 z-[-5]"
      ></img>
      <img
        src="./images/Ellipse 4.svg"
        alt="circle"
        className="absolute top-56 left-64"
      ></img>
    </div>
  );
}

function ButtonFollow() {
  return (
    <div>
      <button className="text-white btn-follow py-2 px-24 font-bold rounded-full">
        Follow
      </button>
    </div>
  );
}

function Images() {
  const [count, setCount] = useState(0);
  function handleSetIncrease() {
    if (count === 5) {
      return;
    }
    setCount((count) => count + 1);
  }
  function handleSetDecrease() {
    if (count === 0) {
      return;
    }
    setCount((count) => count - 1);
  }
  return (
    <div className="flex items-center w-3/4 relative">
      <button
        onClick={() => handleSetDecrease()}
        className="absolute left-[-20px]"
      >
        <img src="./images/Arrow-left.png"></img>
      </button>
      <button
        onClick={() => handleSetIncrease()}
        className="absolute right-[-40px] z-10"
      >
        <img src="./images/Arrow-right.png"></img>
      </button>

      <div className="flex items-center w-full overflow-hidden gap-10 all-image">
        {array.map((img) => (
          <img
            style={{
              transform: ` ${
                img.id - 1 === count ? "scale(1) " : "scale(0.75) "
              } translateX(${-count * 220 + 200}px)`,
            }}
            src={img.src}
            alt={img.src}
            key={img.id}
          ></img>
        ))}
      </div>
      <img
        src="./images/mini slider.png"
        className="absolute bottom-[-30px] left-64"
      ></img>
    </div>
  );
}
