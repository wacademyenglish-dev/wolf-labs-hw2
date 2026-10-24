/* THE NIGHT EDITOR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva que relata, modal passives, have / get done. B2: nenhum português. */
window.HW2 = {
  "id": "b2-review-the-night-editor",
  "titulo": "The Night Editor",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2936f56b5cad/b2-review-the-night-editor/img/live-capa.webp",
  "alvo": "the passive that reports: is said / thought / believed / expected to + verb (to have + participle for the past), it is believed that; modal passives (must be approved, could have been avoided); have / get something done (a service, with the participle)",
  "abrir": "What is your city or town said to be famous for?",
  "fecho": "<b>Is said / thought / believed / expected to</b> + verb. For the past: <b>to have + participle</b> (<i>is said to have stopped</i>). <b>It is believed that</b> + a full clause. A modal passive: <b>must be approved</b>, <b>could have been avoided</b>. <b>Have / get</b> something + participle: <i>get the story checked</i>.",
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
      "sub": "Mia and Leo at a newspaper, ten minutes before midnight. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2936f56b5cad/b2-review-the-night-editor/img/live-conversa.webp",
      "leg": "The rooftop",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the front page needs a headline in ten minutes. What do we know about the clock tower?"
        },
        {
          "quem": "mia",
          "t": "The clock is said to have stopped at midnight on Tuesday."
        },
        {
          "quem": "leo",
          "t": "Who says that?"
        },
        {
          "quem": "mia",
          "t": "Three neighbors. It is believed that a storm damaged the wires, but nothing is confirmed."
        },
        {
          "quem": "leo",
          "t": "So we write is believed to. What else?"
        },
        {
          "quem": "mia",
          "t": "The tower is thought to be more than two hundred years old. It is expected to reopen next month."
        },
        {
          "quem": "leo",
          "t": "Next month? Then the repairs must be approved first."
        },
        {
          "quem": "mia",
          "t": "They have to be approved by the city council on Friday. And honestly, the damage could have been avoided if someone had checked the wires."
        },
        {
          "quem": "leo",
          "t": "Let's not write that. We still have to get the photo taken before midnight."
        },
        {
          "quem": "mia",
          "t": "I'll have the photographer take it now. Then we'll get the story checked by the lawyer."
        }
      ],
      "perguntas": [
        {
          "q": "What is the clock said to have done?",
          "op": [
            "Stopped at midnight on Tuesday",
            "Rung twice at noon",
            "Been moved to a museum"
          ],
          "a": 0,
          "por": "The clock is said to have stopped at midnight on Tuesday."
        },
        {
          "q": "What must happen before the tower reopens?",
          "op": [
            "The repairs must be approved",
            "The clock must be sold",
            "The storm must end"
          ],
          "a": 0,
          "por": "The repairs must be approved first."
        },
        {
          "q": "What will Mia get done by the lawyer?",
          "op": [
            "The story checked",
            "The photo taken",
            "The wires repaired"
          ],
          "a": 0,
          "por": "We'll get the story checked by the lawyer."
        }
      ]
    },
    "out": {
      "sub": "Three lines for tomorrow's paper. Hear it, then say it.",
      "frases": [
        {
          "t": "The clock is said to have stopped at midnight.",
          "img": "https://wolf-labs.pages.dev/p/2936f56b5cad/b2-review-the-night-editor/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The tower is thought to be two hundred years old.",
          "img": "https://wolf-labs.pages.dev/p/2936f56b5cad/b2-review-the-night-editor/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The repairs must be approved by the council on Friday.",
          "img": "https://wolf-labs.pages.dev/p/2936f56b5cad/b2-review-the-night-editor/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Said to, must be, get it done. Four quick ones.",
      "regra": "<b>is said / thought / expected to</b> + verb · the past: <b>to have + participle</b> · <b>must be + participle</b> · <b>get / have</b> something + participle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The tower is expected to reopen next month.",
          "aceita": [],
          "d": "Hint: <b>is expected to</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the time is in the past.",
          "mostra": "The clock is said to stop yesterday.",
          "r": "The clock is said to have stopped yesterday.",
          "aceita": [],
          "d": "Hint: <b>yesterday</b> is past, so <b>to have + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the passive is incomplete.",
          "mostra": "The repairs must approve by the council.",
          "r": "The repairs must be approved by the council.",
          "aceita": [],
          "d": "Hint: a modal passive is <b>must be + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will get the story check by Friday.",
          "r": "I will get the story checked by Friday.",
          "aceita": [
            "I will have the story checked by Friday."
          ],
          "d": "Hint: <b>get something done</b>: use the past participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2936f56b5cad/b2-review-the-night-editor/img/live-conversa.webp",
      "leg": "A city at night, from a rooftop",
      "pede": "Look at the picture: a city at night, seen from a rooftop. You are the night editor. Write a headline and one or two lines about something in a city. Use <b>is said to</b>, <b>is thought to</b>, <b>is expected to</b> or <b>it is believed that</b>.",
      "ph": "Old Bridge Is Said to …",
      "ex": "Old Bridge Is Said to Have Closed Early. It is believed that a broken light caused the problem, but nothing is confirmed. The bridge is expected to reopen on Monday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is your city or town said to be famous for?",
          "ph": "My city is said to …",
          "ex": "My city is said to have the best bread in the country."
        },
        {
          "q": "What do you want to get done this week?",
          "ph": "I want to get my … done.",
          "ex": "I want to get my bike repaired before Saturday."
        }
      ]
    }
  }
};
