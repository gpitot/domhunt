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
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Joan's glasses and jacket are here, but where is she? It looks like there was a struggle...
    Hang on - what's this on the ground?
    `,
  },
  {
    type: "question",
    clue: "Head down the lane of spare cloth until you find the set of stairs that leads to a broken net",
    answers: ["hoop", "basketball"],
    theme: "#116faf",
  },

  {
    theme: "#116faf",
    type: "message",
    character: "d.png",
    message: `Well we found the basketball hoop, now what? 
    `,
  },
  {
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Look here - another clue!
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
    message: `What's this on the ground? It looks like Joan managed to leave us some sort of code book... 
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
    clue: "Follow me across a bridge to visit another era",
    answers: ["obelisk", "pyramid"],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "julian.png",
    message: `Theres something wedged on top of the obelisk... 
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
    message: `And another clue with it 
    `,
  },

  {
    type: "question",
    clue: "Where do children play and herbs grow?",
    answers: [
      "playground",
      "patch",
      "kindergarten",
      "school",
      "garden",
      "veggie",
    ],
    theme: "#116faf",
  },
  {
    theme: "#116faf",
    type: "message",
    character: "anne.png",
    message: `Another letter! What's Joan trying to spell?
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
    message: `G.U.?? What could this next one be? 
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
    answers: ["entrance", "gate", "merrett", "archway"],
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
    clue: "Where have they taken me?",
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
