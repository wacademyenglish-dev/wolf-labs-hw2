/* BRING ME TO LIFE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: separable phrasal verbs with a pronoun in the middle. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "bring-me-to-life",
  "titulo": "Bring Me to Life",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5ffa9f4a1aa5/bring-me-to-life/img/live-abajur.webp",
  "alvo": "separable phrasal verbs with a pronoun in the middle: wake me up, turn it on, pick them up, put them away; with a noun both orders work; never turn on it, never wake up me",
  "abrir": "Who wakes you up in the morning?",
  "fecho": "A short word like <b>it, them, me</b> goes in the <b>middle</b>: <i>turn it on, pick them up, wake me up.</i> With a noun both orders work: <i>turn on the lamp / turn the lamp on.</i> Never <i>turn on it</i>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia asks Leo for help in a dark room. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5ffa9f4a1aa5/bring-me-to-life/img/live-quarto.webp",
      "leg": "A dark room with one small lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm tired. Wake me up at seven tomorrow, please."
        },
        {
          "quem": "leo",
          "t": "OK, I'll wake you up. Do you want the lamp on?"
        },
        {
          "quem": "mia",
          "t": "Yes, turn it on. And turn off the TV, please. Turn it off now."
        },
        {
          "quem": "leo",
          "t": "Done. Your bag is on the floor. Should I pick it up?"
        },
        {
          "quem": "mia",
          "t": "Yes, pick it up and put it on the chair. And put away my shoes."
        },
        {
          "quem": "leo",
          "t": "I'll put them away. Anything else?"
        },
        {
          "quem": "mia",
          "t": "Open the window. The sun is coming up."
        },
        {
          "quem": "leo",
          "t": "Sure. Do you want coffee? I'll make it now."
        }
      ],
      "perguntas": [
        {
          "q": "What will Leo do tomorrow at seven?",
          "op": [
            "Wake Mia up",
            "Turn the lamp off",
            "Make coffee"
          ],
          "a": 0,
          "por": "Wake me up at seven tomorrow."
        },
        {
          "q": "Where does Mia want her bag?",
          "op": [
            "On the chair",
            "On the floor",
            "In the kitchen"
          ],
          "a": 0,
          "por": "Pick it up and put it on the chair."
        },
        {
          "q": "What will Leo put away?",
          "op": [
            "Mia's shoes",
            "The coffee",
            "The window"
          ],
          "a": 0,
          "por": "Put away my shoes. I'll put them away."
        }
      ]
    },
    "out": {
      "sub": "Three short orders. Hear it, then say it.",
      "frases": [
        {
          "t": "Please turn it on. The room is dark.",
          "img": "https://wolf-labs.pages.dev/p/5ffa9f4a1aa5/bring-me-to-life/img/live-abajur.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Wake me up at seven tomorrow.",
          "img": "https://wolf-labs.pages.dev/p/5ffa9f4a1aa5/bring-me-to-life/img/live-quarto.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Pick them up and put them away.",
          "img": "https://wolf-labs.pages.dev/p/5ffa9f4a1aa5/bring-me-to-life/img/live-quente.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the small word go? Four quick ones.",
      "regra": "<b>it / them / me</b> go in the middle: <b>turn it on</b> · <b>pick them up</b> · <b>wake me up</b> · never <i>turn on it</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Pick it up and put it away.",
          "aceita": [],
          "d": "Dica: o pronome <b>it</b> fica no meio: pick <b>it</b> up."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Turn on it, please.",
          "r": "Turn it on, please.",
          "aceita": [],
          "d": "Dica: o pronome vai no meio: <b>turn it on</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Please wake up me at six.",
          "r": "Please wake me up at six.",
          "aceita": [],
          "d": "Dica: <b>me</b> fica no meio: <b>wake me up</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She put away them yesterday.",
          "r": "She put them away yesterday.",
          "aceita": [],
          "d": "Dica: <b>them</b> fica no meio: <b>put them away</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5ffa9f4a1aa5/bring-me-to-life/img/live-quente.webp",
      "leg": "A warm lamp, a blanket and a cup",
      "pede": "Look at the picture: a warm lamp, a blanket and a cup. Write 2 or 3 sentences about your morning. Put the small word in the middle: <b>turn it on</b>, <b>wake me up</b>, <b>pick them up</b>.",
      "ph": "Every morning my alarm wakes me up …",
      "ex": "Every morning my alarm wakes me up. I turn it off and I turn on the lamp. Then I pick my clothes up."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who wakes you up in the morning? What do you turn on first?",
          "ph": "… wakes me up. I turn it on.",
          "ex": "My alarm wakes me up. I turn on the light first."
        },
        {
          "q": "What do you put away at night? What do you pick up from the floor?",
          "ph": "I put … away.",
          "ex": "I put my shoes away. I pick them up from the floor."
        }
      ]
    }
  }
};
