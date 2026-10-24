/* READ IT BACKWARDS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=".
   Alvo: sintagmas nominais. C1: nenhum português na lição. */
window.HW2 = {
  "id": "read-it-backwards",
  "titulo": "Read It Backwards",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/04d6657290bb/read-it-backwards/img/live-bancada.webp",
  "alvo": "complex noun phrases: the head is the last word, read it backwards; modifier order (opinion, size, age, shape, colour, origin, material, purpose); a two-year-old car, no S inside; stop before the reader is lost",
  "abrir": "Pick one object you use every day. Describe it in one phrase.",
  "fecho": "The head of a noun phrase is its <b>last</b> word: read it <b>backwards</b>. Order: <b>opinion, size, age, shape, colour, origin, material, purpose</b>: <i>a lovely little old French clock</i>. A number inside the stack is singular and hyphenated: <b>a two-year-old car</b>. And stop before the reader gets lost.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo label the tools of a small museum. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/04d6657290bb/read-it-backwards/img/live-bancada.webp",
      "leg": "A dim workshop bench",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the museum needs a label for every tool. Start with this one."
        },
        {
          "quem": "leo",
          "t": "It's a plane. Old, wooden, from the nineteenth century, for smoothing wood."
        },
        {
          "quem": "mia",
          "t": "So what do we write? A smoothing rosewood Victorian plane?"
        },
        {
          "quem": "leo",
          "t": "Careful. The purpose goes last, right before the noun. A Victorian rosewood smoothing plane."
        },
        {
          "quem": "mia",
          "t": "And the chisel next to it? It's heavy, black, and made of cast iron."
        },
        {
          "quem": "leo",
          "t": "A heavy black cast-iron chisel. Opinion, then colour, then material."
        },
        {
          "quem": "mia",
          "t": "What about the saw? It's three years old, and the museum bought it."
        },
        {
          "quem": "leo",
          "t": "A three-year-old saw. Singular, with hyphens, even with a number inside."
        },
        {
          "quem": "mia",
          "t": "Last one: a beautiful, small, old, round, brown, Italian, leather, tool bag."
        },
        {
          "quem": "leo",
          "t": "Too far. Read it backwards and you get lost. Break it: a beautiful old tool bag, made of brown Italian leather."
        }
      ],
      "perguntas": [
        {
          "q": "What goes right before the noun in a label?",
          "op": [
            "The purpose",
            "The opinion",
            "The origin"
          ],
          "a": 0,
          "por": "The purpose goes last, right before the noun."
        },
        {
          "q": "How does Leo write the saw's age?",
          "op": [
            "A three-year-old saw",
            "A three-years-old saw",
            "A saw of three years old"
          ],
          "a": 0,
          "por": "A three-year-old saw. Singular, with hyphens."
        },
        {
          "q": "Why does Leo reject the last phrase?",
          "op": [
            "It goes too far, so the reader gets lost",
            "The order is wrong",
            "There is no noun"
          ],
          "a": 0,
          "por": "Too far. Read it backwards and you get lost."
        }
      ]
    },
    "out": {
      "sub": "Three labels from the museum. Hear it, then say it.",
      "frases": [
        {
          "t": "A Victorian rosewood smoothing plane.",
          "img": "https://wolf-labs.pages.dev/p/04d6657290bb/read-it-backwards/img/live-bancada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "A heavy black cast-iron cooking pot.",
          "img": "https://wolf-labs.pages.dev/p/04d6657290bb/read-it-backwards/img/live-bandeja.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "A two-year-old delivery driver's coat.",
          "img": "https://wolf-labs.pages.dev/p/04d6657290bb/read-it-backwards/img/live-bancada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Head, order, hyphen. Four quick ones.",
      "regra": "The head is <b>last</b> · opinion, size, age, shape, colour, origin, material, purpose · <b>a two-year-old car</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She bought a lovely little brass desk clock.",
          "aceita": [],
          "d": "Hint: opinion, size, material, then purpose, then the head."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He drives a two-years-old car.",
          "r": "He drives a two-year-old car.",
          "aceita": [],
          "d": "Hint: inside a stack the number stays singular: <b>year</b>, not <i>years</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "We need a cooking cast-iron heavy pot.",
          "r": "We need a heavy cast-iron cooking pot.",
          "aceita": [],
          "d": "Hint: opinion, material, purpose: <b>heavy cast-iron cooking</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: build it before the noun.",
          "mostra": "It is a bag of leather brown.",
          "r": "It is a brown leather bag.",
          "aceita": [
            "It's a brown leather bag."
          ],
          "d": "Hint: no <i>of</i> and nothing after the head: colour, then material, then <b>bag</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/04d6657290bb/read-it-backwards/img/live-bandeja.webp",
      "leg": "A tray of small old objects",
      "pede": "Look at the picture: a tray of small old objects. Choose three and write a museum label for each. Put the head last. Use a stack of modifiers and at least one number with a hyphen.",
      "ph": "A worn …",
      "ex": "A worn brass pocket key. A tiny round wire-framed pair of reading glasses. A three-inch wooden ruler."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe an object you use every day in one phrase.",
          "ph": "a … ",
          "ex": "A battered old brown leather work bag."
        },
        {
          "q": "What is the oldest thing you own?",
          "ph": "The oldest thing I own is a …",
          "ex": "The oldest thing I own is a thirty-year-old family clock."
        }
      ]
    }
  }
};
