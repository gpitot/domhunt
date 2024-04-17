import React from "react";

export const Item: React.FC<{
  message: string;
  item: string;
  nextQuestion?: () => void;
  classNames: string;
}> = ({ item, message, nextQuestion, classNames }) => {
  return (
    <section className="flex flex-col items-center space-y-4 w-full">
      <div className="w-screen max-w-[600px]  overflow-hidden">
        <img src={`${item}`} alt={item} className="w-full" />
      </div>

      <div className="text-left w-full">{message}</div>
      {nextQuestion && (
        <button
          onClick={nextQuestion}
          className={"border-2 p-2 font-bold bg-slate-100 rounded-md"}
          style={{ color: classNames }}
        >
          Read the next clue
        </button>
      )}
    </section>
  );
};
