import { useState } from "react";

export const Submit: React.FC<{
  handleSubmit: (val: string) => boolean;
  classNames: string;
}> = (props) => {
  const [answer, setAnswer] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    props.handleSubmit(answer);
    setAnswer("");
  };

  return (
    <section className="flex flex-col space-y-2">
      <input
        type="text"
        className={"p-4 bg-slate-100"}
        style={{ color: props.classNames }}
        value={answer}
        onChange={handleChange}
      />
      <button
        className={"border-2 p-2 font-bold bg-slate-100 rounded-md"}
        style={{ color: props.classNames }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};
