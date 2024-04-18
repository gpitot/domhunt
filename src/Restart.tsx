import React, { useEffect } from "react";

export const Restart: React.FC = () => {
  const restart = () => {
    window.localStorage.setItem("currentQuestion", "0");
    window.location.href = "/";
  };

  useEffect(() => {
    if (new URL(document.location.toString()).searchParams.get("restart")) {
      restart();
    }
  }, []);

  return null;
};
