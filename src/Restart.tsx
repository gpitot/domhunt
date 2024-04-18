import React from "react";

export const Restart: React.FC = () => {
  const restart = () => {
    window.localStorage.setItem("currentQuestion", "0");
    window.location.reload();
  };

  return (
    <button
      className="absolute top-0 right-0 w-2 h-2 bg-black"
      onClick={restart}
    ></button>
  );
};
