import React, { useEffect } from "react";

type Character =
  | "d.png"
  | "julian.png"
  | "anne.png"
  | "george.png"
  | "timmy.png";

export const Message: React.FC<{
  character: Character;
  text: string;
  nextQuestion: () => void;
  classNames: string;
}> = ({ character, text, nextQuestion, classNames }) => {
  const [currentText, setCurrentText] = React.useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev.length === text.length) {
          clearInterval(interval);
          return prev;
        }
        return text.slice(0, prev.length + 1);
      });
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <section className="flex flex-col items-center space-y-4 w-full">
      <div className="rounded-full w-40 h-40 border-4 border-slate-200 overflow-hidden">
        <img src={`${character}`} alt={character} className="w-full h-full" />
      </div>

      <div className="text-left w-full">{currentText}</div>
      <button
        onClick={nextQuestion}
        className={"border-2 p-2 px-4 font-bold bg-slate-100 rounded-md"}
        style={{ color: classNames }}
      >
        Read the clue
      </button>
    </section>
  );
};
