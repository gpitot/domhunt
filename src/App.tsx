import { useState } from "react";
import { Question } from "./Question";
import { Submit } from "./Submit";
import { questions } from "./questions";
import classNames from "classnames";
import { Message } from "./Message";

export const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [visualState, setVisualState] = useState<"question" | "message">(
    "question"
  );

  const onSubmit = (val: string) => {
    // Check if the answer is correct
    if (val === questions[currentQuestion].answer) {
      // If correct, move to the next question
      setCurrentQuestion(currentQuestion + 1);
      setVisualState("message");
      return true;
    }
    return false;
  };

  const current = questions[currentQuestion];

  return (
    <section
      className={classNames(
        `
      h-screen 
      text-white text-xl 
      flex flex-col 
      items-center
      space-y-8
      py-10
      `,
        { "justify-end": visualState === "question" },
        { "justify-start": visualState === "message" }
      )}
      style={{ backgroundColor: current.color }}
    >
      {visualState === "message" && (
        <Message
          character={current.message.character}
          text={current.message.text}
        />
      )}
      {visualState === "question" && (
        <>
          <Question question={questions[currentQuestion].question} />
          <Submit handleSubmit={onSubmit} classNames={current.color} />
        </>
      )}
    </section>
  );
};
