import React from "react";

export const Message: React.FC<{ character: "d.png"; text: string }> = ({
  character,
  text,
}) => {
  return (
    <section className="flex flex-col items-center space-y-4">
      <div className="rounded-full w-40 h-40 border-4 border-slate-200 overflow-hidden">
        <img src={`${character}`} alt={character} />
      </div>

      <div>{text}</div>
    </section>
  );
};
