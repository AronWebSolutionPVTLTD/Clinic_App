import React, { useState, useEffect } from "react";

function Timer({ isRunning }) {
  const initialTimer = 0;
  const [timer, setTimer] = useState(initialTimer);
  //   const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    let countdown;
    if (isRunning) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(countdown);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <p>{formatTime(timer)}</p>
    </div>
  );
}

export default Timer;
