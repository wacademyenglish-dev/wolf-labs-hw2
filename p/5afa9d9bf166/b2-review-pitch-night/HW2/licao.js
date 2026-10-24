/* PITCH NIGHT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: relativas, which is why, preposição + -ing, make. B2: nenhum português. */
window.HW2 = {
  "id": "b2-review-pitch-night",
  "titulo": "Pitch Night",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5afa9d9bf166/b2-review-pitch-night/img/live-capa.webp",
  "alvo": "relative clauses (who, which, that, whose; never what), non-defining clauses between commas (which, not that), sentence relative ', which is why', reduced relatives (keys left by the door, people living alone), preposition + -ing (instead of explaining, insist on paying), make a decision / a mistake",
  "abrir": "Think of an invention you could not live without. Why do you need it?",
  "fecho": "<b>Who / which / that</b> for the thing or person, <b>whose</b> for what belongs to them, never <i>what</i>. Extra information goes between commas, with <b>which</b>: <i>The lamp, which costs forty dollars, …</i> <b>, which is why</b> adds the result. After a preposition: <b>-ing</b> (<i>insisted on paying</i>). <b>Make</b> a decision, a mistake.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-AU-WilliamMultilingualNeural",
      "cor": "#f0b866"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo after pitch night at a workshop. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5afa9d9bf166/b2-review-pitch-night/img/live-conversa.webp",
      "leg": "The lounge",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I just saw three pitches. The first was a lamp that wakes you up with the colors of a sunrise."
        },
        {
          "quem": "leo",
          "t": "Who invented it?"
        },
        {
          "quem": "mia",
          "t": "A teacher whose daughter could never get up for school. The lamp, which costs only forty dollars, is already in two hundred homes."
        },
        {
          "quem": "leo",
          "t": "Impressive. And the second one?"
        },
        {
          "quem": "mia",
          "t": "A backpack made from old bicycle tires. The inventor insisted on showing us how strong it was, instead of just talking about it."
        },
        {
          "quem": "leo",
          "t": "Did you like it?"
        },
        {
          "quem": "mia",
          "t": "The pitch was good, but the price is high, which is why I'm not investing."
        },
        {
          "quem": "leo",
          "t": "And the third?"
        },
        {
          "quem": "mia",
          "t": "A box for keys left near the door. People living alone love it."
        },
        {
          "quem": "leo",
          "t": "So who gets your money?"
        },
        {
          "quem": "mia",
          "t": "Nobody told me to choose the lamp, but I made the decision. I'm investing in it."
        }
      ],
      "perguntas": [
        {
          "q": "Who invented the lamp?",
          "op": [
            "A teacher whose daughter could never get up for school",
            "A student who needed more light",
            "A farmer who woke up early"
          ],
          "a": 0,
          "por": "A teacher whose daughter could never get up for school."
        },
        {
          "q": "Why isn't Mia investing in the backpack?",
          "op": [
            "The price is high",
            "It is not strong",
            "The inventor was late"
          ],
          "a": 0,
          "por": "The pitch was good, but the price is high, which is why I'm not investing."
        },
        {
          "q": "What did Mia decide?",
          "op": [
            "To invest in the lamp",
            "To invest in the box",
            "To invest in nothing"
          ],
          "a": 0,
          "por": "Nobody told me to choose the lamp, but I made the decision."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from pitch night. Hear it, then say it.",
      "frases": [
        {
          "t": "The lamp, which costs forty dollars, wakes you with the sunrise.",
          "img": "https://wolf-labs.pages.dev/p/5afa9d9bf166/b2-review-pitch-night/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He insisted on showing us the backpack instead of explaining it.",
          "img": "https://wolf-labs.pages.dev/p/5afa9d9bf166/b2-review-pitch-night/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "People living alone love a box for keys left by the door.",
          "img": "https://wolf-labs.pages.dev/p/5afa9d9bf166/b2-review-pitch-night/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Who, which, whose, -ing. Four quick ones.",
      "regra": "<b>who / which / that / whose</b>, never <i>what</i> · extra information: commas + <b>which</b> · after a preposition: <b>-ing</b> · <b>make</b> a decision.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The woman whose lamp won is my neighbor.",
          "aceita": [],
          "d": "Hint: <b>whose</b> + the thing that belongs to her."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The lamp what wakes you costs forty dollars.",
          "r": "The lamp that wakes you costs forty dollars.",
          "aceita": [
            "The lamp which wakes you costs forty dollars."
          ],
          "d": "Hint: for a thing, use <b>that</b> or <b>which</b>, never <i>what</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She insisted on pay for the coffee.",
          "r": "She insisted on paying for the coffee.",
          "aceita": [],
          "d": "Hint: after a preposition, use <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I did a big decision last night.",
          "r": "I made a big decision last night.",
          "aceita": [],
          "d": "Hint: you <b>make</b> a decision, you do not <i>do</i> one."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5afa9d9bf166/b2-review-pitch-night/img/live-conversa.webp",
      "leg": "A quiet lounge",
      "pede": "Look at the picture: a quiet lounge where people wait. Imagine you are an inventor pitching an idea there. Describe it with <b>who, which, whose</b> or <b>, which is why</b>.",
      "ph": "I invented a … which …",
      "ex": "I invented a mug which keeps coffee warm all day. It is made for people working at night, which is why it is dark blue. Nobody told me to build it, but I made the first one myself."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is an everyday object you could not live without? Describe it.",
          "ph": "It is a … which …",
          "ex": "It is my phone, which wakes me up every morning."
        },
        {
          "q": "Describe a person you admire. Use whose or who.",
          "ph": "I admire a person who …",
          "ex": "I admire my aunt, whose shop has been open for thirty years."
        }
      ]
    }
  }
};
