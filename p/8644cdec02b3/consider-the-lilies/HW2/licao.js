/* CONSIDER THE LILIES · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: passiva sem agente e neither ... nor. Versículos (WEB): Luke 12:27 (Listen), Luke 12:31 (Out loud), Luke 12:24 (Você). Nada da Bíblia é marcado como errado. C1: nenhum português. */
window.HW2 = {
  "id": "consider-the-lilies",
  "titulo": "Consider the Lilies",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8644cdec02b3/consider-the-lilies/img/live-lirios.webp",
  "alvo": "passive without an agent (will be added, has been fixed, was not arrayed) and the agent only when it matters (God feeds them); neither ... nor, neither + auxiliary + subject (neither do they spin); never neither ... or, never neither they",
  "abrir": "What is one worry that has already been solved?",
  "fecho": "The <b>passive</b> hides the doer: <i>The flat will be cleaned on Thursday.</i> Use <b>be + past participle</b>. <b>neither ... nor</b> joins two negatives: <i>neither the boxes nor the keys</i>. At the start: <b>Neither do they spin</b> (auxiliary before the subject).",
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
      "sub": "Mia worries about her move. She quotes Luke 12:27. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8644cdec02b3/consider-the-lilies/img/live-prensa.webp",
      "leg": "Pressed flowers on a page",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I can't stop worrying about my move. Nothing has been packed, the flat hasn't been cleaned, and the keys haven't been handed over."
        },
        {
          "quem": "leo",
          "t": "Worrying neither packs the boxes nor cleans the flat."
        },
        {
          "quem": "mia",
          "t": "True. This morning I read Luke 12:27. “Consider the lilies, how they grow. They don’t toil, neither do they spin; yet I tell you, even Solomon in all his glory was not arrayed like one of these.”"
        },
        {
          "quem": "leo",
          "t": "Neither do they worry, I suppose. Flowers in a field are not watered by a gardener, yet every spring they are dressed in color."
        },
        {
          "quem": "mia",
          "t": "Right. Some things will be taken care of without me."
        },
        {
          "quem": "leo",
          "t": "And the rest we can plan. The boxes will be packed tonight, the flat will be cleaned on Thursday, and the van will be booked tomorrow."
        },
        {
          "quem": "mia",
          "t": "Neither the list nor the plan feels heavy now. Thank you."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say about worrying?",
          "op": [
            "It neither packs the boxes nor cleans the flat",
            "It will pack the boxes tonight",
            "It helps with the keys"
          ],
          "a": 0,
          "por": "Worrying neither packs the boxes nor cleans the flat."
        },
        {
          "q": "What does the verse say about Solomon?",
          "op": [
            "He was not dressed like one of the lilies",
            "He was richer than the lilies",
            "He planted the lilies"
          ],
          "a": 0,
          "por": "Solomon in all his glory was not arrayed like one of these."
        },
        {
          "q": "When will the flat be cleaned?",
          "op": [
            "On Thursday",
            "Tonight",
            "Tomorrow"
          ],
          "a": 0,
          "por": "The flat will be cleaned on Thursday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about plans and worries. The third is from the Bible: Luke 12:31 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "The boxes will be packed tonight, and the flat will be cleaned on Thursday.",
          "img": "https://wolf-labs.pages.dev/p/8644cdec02b3/consider-the-lilies/img/live-prensa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Worrying neither packs the boxes nor cleans the flat.",
          "img": "https://wolf-labs.pages.dev/p/8644cdec02b3/consider-the-lilies/img/live-corvos.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "But seek God’s Kingdom, and all these things will be added to you.",
          "img": "https://wolf-labs.pages.dev/p/8644cdec02b3/consider-the-lilies/img/live-lirios.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Passive or neither ... nor? Four quick ones.",
      "regra": "<b>will be + participle</b> (will be sent) · <b>neither ... nor</b> (not or) · <b>Neither do they ...</b> (auxiliary before the subject).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The flat will be cleaned on Thursday.",
          "aceita": [],
          "d": "Hint: <b>will be</b> + past participle (cleaned)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She neither sings or dances.",
          "r": "She neither sings nor dances.",
          "aceita": [],
          "d": "Hint: <b>neither</b> goes with <b>nor</b>, not <b>or</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Neither they worry about tomorrow.",
          "r": "Neither do they worry about tomorrow.",
          "aceita": [],
          "d": "Hint: after <b>Neither</b> at the start, use <b>do</b> before the subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The report will be send tomorrow.",
          "r": "The report will be sent tomorrow.",
          "aceita": [],
          "d": "Hint: passive = <b>be</b> + the past participle (sent)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8644cdec02b3/consider-the-lilies/img/live-prensa.webp",
      "leg": "Flowers pressed on a page",
      "pede": "Look at the picture: flowers pressed on a page. Write 2 or 3 sentences about a worry of yours that has been solved, or will be solved. Use the passive (<b>has been fixed</b>, <b>will be done</b>) or <b>neither ... nor</b>.",
      "ph": "My worry about … has been …",
      "ex": "My worry about the exam has been solved: the date was moved. Neither the notes nor the books were hard to find."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Luke 12:24 says, “Consider the ravens: they don’t sow, they don’t reap, they have no warehouse or barn, and God feeds them. How much more valuable are you than birds!” Think of something you have been given. What have you been given, and by whom?",
          "ph": "I have been given … by …",
          "ex": "I have been given a good job by an old friend, and I have been supported by my family."
        },
        {
          "q": "What worry will be solved this week? Use a passive or neither ... nor.",
          "ph": "My … will be …",
          "ex": "My car will be repaired on Friday. Neither the bus nor the metro will be needed."
        }
      ]
    }
  }
};
