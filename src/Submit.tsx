import { useState } from "react";

export const Submit: React.FC<{
  validAnswers: readonly string[];
  handleCorrectGuess: () => void;
  classNames: string;
}> = (props) => {
  const [answer, setAnswer] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);

    const inputs = e.target.value.toLowerCase().trim().split(" ");

    for (const input of inputs) {
      if (props.validAnswers.includes(input)) {
        onCorrectAnswer();
      }
    }
  };

  const onCorrectAnswer = () => {
    props.handleCorrectGuess();
    setAnswer("");
  };

  return (
    <section className="flex flex-col space-y-2">
      <label htmlFor="answer" className="italic text-sm text-left">
        What can you see
      </label>
      <input
        type="text"
        name="answer"
        className={"p-4 bg-slate-100 rounded-md"}
        style={{ color: props.classNames }}
        value={answer}
        onChange={handleChange}
      />
    </section>
  );
};
