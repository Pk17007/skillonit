import { useState, useEffect } from "react";

const SW2 = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 500); // runs every 500ms
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="w-1/4 m-auto">
      <h1 className="bg-emerald-300 w-7/10 m-auto mt-6 ml-4 p-2">
        Timer is: {timer}
      </h1>
      <button
        className="bg-sky-300 rounded-full ml-2 text-sm px-4"
        onClick={() => setRunning(true)}
      >
        Start
      </button>
      <button
        className="bg-sky-300 rounded-full ml-2 text-sm px-4"
        onClick={() => setRunning(false)}
      >
        Pause
      </button>
      <button
        className="bg-sky-300 rounded-full ml-2 text-sm px-4"
        onClick={() => {
          setTimer(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SW2;