import { useEffect, useState } from "react";
import { questions } from "./questions";
import classNames from "classnames";
import { Message } from "./Message";
import { Item } from "./Item";
import { Layout } from "./Layout";
import { Question } from "./Question";
import { Submit } from "./Submit";
import { Restart } from "./Restart";

export const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(
    parseInt(window.localStorage.getItem("currentQuestion") ?? "0")
  );

  useEffect(() => {
    // preload images
    const images = [
      "anne.png",
      "codex.jpeg",
      "d.png",
      "G.jpeg",
      "I.jpeg",
      "julian.png",
      "L.jpeg",
      "M.jpeg",
      "N.jpeg",
      "timmy.png",
      "U.jpeg",
      "Y.jpeg",
    ];
    images.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const nextQuestion = () => {
    window.localStorage.setItem("currentQuestion", `${currentQuestion + 1}`);
    setCurrentQuestion(currentQuestion + 1);
  };

  const current = questions[currentQuestion];

  return (
    <section
      className={classNames(
        `
      h-dvh
      text-white text-xl 
      flex flex-col
      items-center
      `
      )}
    >
      <Restart />
      {current.type === "message" && (
        <Layout classes="my-10 text-center justify-start">
          <Message
            character={current.character}
            text={current.message}
            nextQuestion={nextQuestion}
            classNames={current.theme}
          />
        </Layout>
      )}

      {current.type === "question" && (
        <Layout classes="my-10 text-center justify-end">
          <Question question={current.clue} />
          <Submit
            handleCorrectGuess={nextQuestion}
            classNames={current.theme}
            validAnswers={current.answers}
          />
        </Layout>
      )}

      {current.type === "item" && (
        <Layout classes="text-center justify-start">
          <Item
            item={current.item}
            message={current.message}
            nextQuestion={nextQuestion}
            classNames={current.theme}
          />
        </Layout>
      )}
      {current.type === "end" && (
        <Layout classes="text-center justify-start">
          <Item
            item={current.image}
            message={current.message}
            classNames={current.theme}
          />
        </Layout>
      )}
    </section>
  );
};
