/* THE FLAT HUNT · LIÇÃO DE CASA 2.0 (23/10/2026) · revisão B1. Motor: hw2.js. JSON puro depois do "=". B1: nenhum português. */
window.HW2 = {
  "id": "b1-review-the-flat-hunt",
  "titulo": "The Flat Hunt",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/68027ffb09cf/b1-review-the-flat-hunt/img/live-capa.webp",
  "alvo": "Unit 8 review: relative clauses (who, which, that, where); make / let / help + person + plain verb; stop + -ing; hear / see + someone + -ing; would rather + plain verb",
  "abrir": "What would you rather have: a big flat or a nice street?",
  "fecho": "<b>who</b> (people) · <b>which / that</b> (things) · <b>where</b> (places) · <b>make / let / help + person + plain verb</b> · <b>stop + -ing</b> · <b>hear / see + someone + -ing</b> · <b>would rather + plain verb</b>.",
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
      "sub": "Mia and Leo look at a new flat. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/68027ffb09cf/b1-review-the-flat-hunt/img/live-capa.webp",
      "leg": "An empty room with a box",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, this is the flat that I told you about. It's the one which has a big window."
        },
        {
          "quem": "leo",
          "t": "It's empty, but I like it. Who lives next door?"
        },
        {
          "quem": "mia",
          "t": "A woman who plays the drums. But the owner let me ask her to stop playing at night."
        },
        {
          "quem": "leo",
          "t": "She stopped playing? That's nice. What else?"
        },
        {
          "quem": "mia",
          "t": "The owner makes tenants recycle everything, and he helps new people carry boxes."
        },
        {
          "quem": "leo",
          "t": "Good. I can hear a dog barking somewhere."
        },
        {
          "quem": "mia",
          "t": "Yes, and from the window I saw a man running for the bus. It's a street where there is always something happening."
        },
        {
          "quem": "leo",
          "t": "Would you rather live here or in the old flat?"
        },
        {
          "quem": "mia",
          "t": "I'd rather live here. I'd prefer a noisy street to a boring one."
        },
        {
          "quem": "leo",
          "t": "OK. Let's take it!"
        }
      ],
      "perguntas": [
        {
          "q": "Who lives next door?",
          "op": [
            "A woman who plays the drums",
            "An old man with a dog",
            "The owner"
          ],
          "a": 0,
          "por": "A woman who plays the drums."
        },
        {
          "q": "What does the owner make tenants do?",
          "op": [
            "Recycle everything",
            "Paint the walls",
            "Pay early"
          ],
          "a": 0,
          "por": "The owner makes tenants recycle everything."
        },
        {
          "q": "Where would Mia rather live?",
          "op": [
            "In the new flat",
            "In the old flat",
            "In the countryside"
          ],
          "a": 0,
          "por": "I'd rather live here."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a flat. Hear it, then say it.",
      "frases": [
        {
          "t": "She lives in the street where I grew up.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I stopped checking my phone at night.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I heard a dog barking and I saw a man running.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who / which, make, would rather. Four quick ones.",
      "regra": "<b>who / which / that / where</b> · <b>make / let / help + person + plain verb</b> · <b>would rather + plain verb</b> · <b>stop + -ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The man who lives next door grows tomatoes.",
          "aceita": [],
          "d": "Hint: people = <b>who</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the flat what has a garden.",
          "r": "This is the flat which has a garden.",
          "aceita": [
            "This is the flat that has a garden."
          ],
          "d": "Hint: for things, <b>which</b> or <b>that</b>, never <i>what</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They made me to clean the flat.",
          "r": "They made me clean the flat.",
          "aceita": [],
          "d": "Hint: <b>made me</b> + plain verb, with no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd rather to live in a quiet street.",
          "r": "I'd rather live in a quiet street.",
          "aceita": [],
          "d": "Hint: <b>would rather</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/68027ffb09cf/b1-review-the-flat-hunt/img/live-capa.webp",
      "leg": "An empty room with a box and a window",
      "pede": "Look at the picture: an empty room with a box and a window. Write 2 or 3 sentences about a flat you would like. Use <b>which / who / where</b> and <b>I'd rather</b>.",
      "ph": "I'd like a flat which …",
      "ex": "I'd like a flat which has a big window. I'd rather live in a street where there are cafes, and next to someone who is quiet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did your parents make you do, and what did they let you do?",
          "ph": "They made me … / They let me …",
          "ex": "They made me do my homework first, but they let me play after dinner."
        },
        {
          "q": "What have you stopped doing? What can you hear right now?",
          "ph": "I stopped … / I can hear …",
          "ex": "I stopped drinking soda last year. I can hear a car passing outside."
        }
      ]
    }
  }
};
