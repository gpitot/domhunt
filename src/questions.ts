type Screen = {
  theme: string;
} & (
  | {
      type: "question";
      clue: string;
      answers: readonly string[];
    }
  | {
      type: "message";
      character:
        | "d.png"
        | "julian.png"
        | "anne.png"
        | "george.png"
        | "timmy.png";
      message: string;
    }
  | {
      type: "item";
      message: string;
      item: string;
    }
  | {
      type: "end";
      message: string;
      image: string;
    }
);

export const questions: Screen[] = [
  {
    type: "question",
    clue: "Head down the lane of off-cut clothes until you find the set of stairs that leads to a broken net in the sky",
    answers: ["hoop", "basketball"],
    theme: "#116faf",
  },

  {
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Hello! I'm Julian, I'm glad you found us. We need your help!
    Someones kidnapped George and we have to rescue her. 
    It looks like she's been able to leave us some clues to help us find her.
    Here's the first one: 
    `,
  },
  {
    type: "question",
    clue: "I have 6 flat lines, and am cylindrical in shape, what am I?",
    answers: ["tank", "water"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "anne.png",
    message: `Hmm it looks like George managed to leave us some sort of code... 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "You found a Codex!",
    item: "codex.jpeg",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "d.png",
    message: `Lets hang onto this, it might come in handy later. 
    `,
  },
  {
    type: "question",
    clue: "Follow me across a bridge to visit a distant time",
    answers: ["obelisk", "pyramid"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Theres a letter here... 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "G.jpeg",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "d.png",
    message: `And another clue 
    `,
  },

  {
    type: "question",
    clue: "Where do children play and herbs grow?",
    answers: ["playground", "vegie", "patch", "kindergarten", "school"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "anne.png",
    message: `Another letter! What's George trying to spell?
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "U.jpeg",
  },

  {
    type: "question",
    clue: "Now look for something that takes you up, up, UP!",
    answers: ["lift", "elevator"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "d.png",
    message: `G.U.?? What could this be? 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "Y.jpeg",
  },

  {
    type: "question",
    clue: "They took me through the gate of tterreM",
    answers: ["entrance", "gate", "merrett"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Theres a scrap of paper hidden in the archway... 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "M.jpeg",
  },

  {
    type: "question",
    clue: "Follow me South along the street where Bel was buried. Stop when you work out how he died",
    answers: ["hanged", "executed"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "d.png",
    message: `I can see a letter buried in the dirt! 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "N.jpeg",
  },

  {
    type: "question",
    clue: "Look for the heart struck by lightning",
    answers: ["defibrillator", "defib"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "anne.png",
    message: `Nice work team! We must be close now. I can see another piece of paper... 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "L.jpeg",
  },

  {
    type: "question",
    clue: "You're so close... Look for the 10 white letters and 3 flags",
    answers: ["wharf", "manly"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Look there! Another letter! 
    `,
  },
  {
    theme: "#116faf",
    type: "item",
    message: "",
    item: "I.jpeg",
  },
  {
    type: "question",
    clue: "Where am I?",
    answers: ["maestro"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "george.png",
    message: `You saved me! Wizard!! Now lets eat, I'm starving!
    `,
  },
  {
    type: "end",
    message: `Woof Woof!`,
    image: "timmy.png",
    theme: "#116faf",
  },
];
