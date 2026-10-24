/* NEVER BEFORE HAD I · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: inversion after negative/restrictive adverbs. C1: nenhum português. Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "never-before-had-i",
  "titulo": "Never Before Had I",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/99e6b4edc0ec/never-before-had-i/img/live-capa.webp",
  "alvo": "inversion after negative and restrictive adverbs (Never before had I…, Not once did…, Rarely do…, Hardly had… when…, Only later did I…, Little did I…) and fronting for effect (Above us danced…)",
  "abrir": "What is the most beautiful thing you have ever seen in nature?",
  "fecho": "<b>Inversion for drama</b>: after a negative or restrictive adverb, the helper verb goes before the subject. <i>Never before had I seen it.</i> <i>Not once did anybody complain.</i> <i>Rarely do you see a sky so clear.</i> <i>Hardly had I arrived when it started.</i> <i>Only later did I realize.</i> Use it once, at the right moment.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia asks Leo about his trip to Finland. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/99e6b4edc0ec/never-before-had-i/img/live-capa.webp",
      "leg": "The northern lights over a frozen lake",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you're back! How was Finland?"
        },
        {
          "quem": "leo",
          "t": "Never before had I seen anything like it. Above us danced a green curtain of light."
        },
        {
          "quem": "mia",
          "t": "Wow. Was it cold?"
        },
        {
          "quem": "leo",
          "t": "Brutally cold. Not once did anybody complain, though."
        },
        {
          "quem": "mia",
          "t": "Did you take good photos?"
        },
        {
          "quem": "leo",
          "t": "Hardly had I lifted my camera when the colors changed."
        },
        {
          "quem": "mia",
          "t": "Oh no. So no photos?"
        },
        {
          "quem": "leo",
          "t": "Only later did I realize I had none. But little did I care."
        },
        {
          "quem": "mia",
          "t": "Really?"
        },
        {
          "quem": "leo",
          "t": "Really. Rarely does a night like that come twice."
        }
      ],
      "perguntas": [
        {
          "q": "What danced above them?",
          "op": [
            "A green curtain of light",
            "A flock of birds",
            "A group of dancers"
          ],
          "a": 0,
          "por": "Above us danced a green curtain of light."
        },
        {
          "q": "What happened when Leo lifted his camera?",
          "op": [
            "The colors changed",
            "The camera broke",
            "The lights went out"
          ],
          "a": 0,
          "por": "Hardly had I lifted my camera when the colors changed."
        },
        {
          "q": "How does Leo feel about the missing photos?",
          "op": [
            "He does not mind",
            "He is very upset",
            "He will go back soon"
          ],
          "a": 0,
          "por": "Little did I care. Rarely does a night like that come twice."
        }
      ]
    },
    "out": {
      "sub": "Three dramatic sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Never before had I seen anything like it.",
          "img": "https://wolf-labs.pages.dev/p/99e6b4edc0ec/never-before-had-i/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Not once did anybody complain about the cold.",
          "img": "https://wolf-labs.pages.dev/p/99e6b4edc0ec/never-before-had-i/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Hardly had I lifted my camera when the colors changed.",
          "img": "https://wolf-labs.pages.dev/p/99e6b4edc0ec/never-before-had-i/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Inversion after never, rarely, hardly, only later. Four quick ones.",
      "regra": "<b>Never before had I…</b> · <b>Rarely do I…</b> · <b>Hardly had I… when…</b> · <b>Only later did I…</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Only later did I realize my mistake.",
          "aceita": [],
          "d": "Hint: <b>Only later</b> + <b>did</b> + subject + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Never before I had seen so many stars.",
          "r": "Never before had I seen so many stars.",
          "aceita": [
            "Never had I seen so many stars."
          ],
          "d": "Hint: after <b>never before</b>, <b>had</b> comes before the subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Rarely I go out at night.",
          "r": "Rarely do I go out at night.",
          "aceita": [],
          "d": "Hint: after <b>rarely</b>, use <b>do</b> + subject."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Hardly had we arrived than it started.",
          "r": "Hardly had we arrived when it started.",
          "aceita": [],
          "d": "Hint: <b>hardly</b> goes with <b>when</b>, not <i>than</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/99e6b4edc0ec/never-before-had-i/img/live-conversa.webp",
      "leg": "A typewriter and a notebook by a dark window",
      "pede": "Look at the picture: a typewriter and a notebook by a dark window. Write 2 or 3 sentences: the opening of a moment you will never forget. Use <b>Never before had I…</b>, <b>Not once did…</b>, <b>Only later did I…</b> or <b>Above us…</b>",
      "ph": "Never before had I …",
      "ex": "Never before had I felt so small. Above us flew a hundred birds. Only later did I understand that I had forgotten my phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the most beautiful place you have ever seen?",
          "ph": "Never before had I seen …",
          "ex": "Never before had I seen mountains as high as the ones in Peru."
        },
        {
          "q": "Tell me something you rarely do.",
          "ph": "Rarely do I …",
          "ex": "Rarely do I wake up before seven, but I did it today."
        }
      ]
    }
  }
};
