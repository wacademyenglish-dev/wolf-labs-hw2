/* YOU DON'T HAVE TO RUN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / have to / mustn't / don't have to. Jogo: falas originais, sem armas. B1: nenhum português. Só live-* (já escuras). */
window.HW2 = {
  "id": "you-dont-have-to-run",
  "titulo": "You Don't Have to Run",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1d9da5804a8d/you-dont-have-to-run/img/live-watch.webp",
  "alvo": "must / have to (it is necessary), mustn't (it is forbidden) and don't have to (it is not necessary); must + plain verb, no to; he / she has to; no do with must",
  "abrir": "What do you have to do every morning?",
  "fecho": "<b>must / have to</b> = necessary: <i>You must be quiet.</i> <b>mustn't</b> = forbidden: <i>You mustn't lose it.</i> <b>don't have to</b> = not necessary: <i>You don't have to run.</i> After must, the plain verb: never <i>must to</i>. He / she: <i>has to</i>.",
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
      "sub": "Mia trains Leo for a night at a gala. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/1d9da5804a8d/you-dont-have-to-run/img/live-gala.webp",
      "leg": "A gala hall with chandeliers",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, listen. You must be quiet at the gala. A good agent is never noticed."
        },
        {
          "quem": "leo",
          "t": "OK. Do I have to wear a suit?"
        },
        {
          "quem": "mia",
          "t": "Yes, you have to wear a suit. But you don't have to wear a tie."
        },
        {
          "quem": "leo",
          "t": "And the briefcase? Do I have to carry it?"
        },
        {
          "quem": "mia",
          "t": "No, you don't have to carry it. But you mustn't lose the watch. It's a gadget from the lab."
        },
        {
          "quem": "leo",
          "t": "What does the watch do?"
        },
        {
          "quem": "mia",
          "t": "It opens the safe in the library. You have to press the small button twice. You mustn't press it three times."
        },
        {
          "quem": "leo",
          "t": "Got it. And I don't have to run, right?"
        },
        {
          "quem": "mia",
          "t": "Correct. You don't have to run. An agent must walk slowly and smile."
        },
        {
          "quem": "leo",
          "t": "Walk slowly, smile, press twice. Easy!"
        },
        {
          "quem": "mia",
          "t": "You must remember the order. And you have to stay calm."
        }
      ],
      "perguntas": [
        {
          "q": "Does Leo have to wear a tie?",
          "op": [
            "No, only a suit",
            "Yes, a black tie",
            "Yes, a red tie"
          ],
          "a": 0,
          "por": "You have to wear a suit. But you don't have to wear a tie."
        },
        {
          "q": "How many times must Leo press the button?",
          "op": [
            "Twice",
            "Three times",
            "Once"
          ],
          "a": 0,
          "por": "You have to press the small button twice."
        },
        {
          "q": "What must an agent do at the gala?",
          "op": [
            "Walk slowly and smile",
            "Run fast",
            "Talk loudly"
          ],
          "a": 0,
          "por": "An agent must walk slowly and smile."
        }
      ]
    },
    "out": {
      "sub": "Three rules for a secret night. Hear it, then say it.",
      "frases": [
        {
          "t": "You mustn't lose the watch from the lab.",
          "img": "https://wolf-labs.pages.dev/p/1d9da5804a8d/you-dont-have-to-run/img/live-qlab.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don't have to wear a tie, but you have to wear a suit.",
          "img": "https://wolf-labs.pages.dev/p/1d9da5804a8d/you-dont-have-to-run/img/live-door.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You have to press the button twice to open the safe.",
          "img": "https://wolf-labs.pages.dev/p/1d9da5804a8d/you-dont-have-to-run/img/live-safe.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, mustn't or don't have to? Four quick ones.",
      "regra": "<b>must / have to</b> = necessary · <b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · must + plain verb · he / she <b>has to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You don't have to run, but you must be quiet.",
          "aceita": [],
          "d": "Hint: <b>don't have to</b> = not necessary. <b>Must</b> = necessary."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You must to be quiet in the library.",
          "r": "You must be quiet in the library.",
          "aceita": [],
          "d": "Hint: after <b>must</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You mustn't pay, it is free.",
          "r": "You don't have to pay, it is free.",
          "aceita": [
            "You don't have to pay, it's free."
          ],
          "d": "Hint: it is not necessary, but it is not forbidden: <b>don't have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He have to leave early.",
          "r": "He has to leave early.",
          "aceita": [],
          "d": "Hint: he / she / it: <b>has to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1d9da5804a8d/you-dont-have-to-run/img/live-mi6.webp",
      "leg": "A quiet corridor with green lamps",
      "pede": "Look at the picture: a quiet corridor with green lamps. Write 2 or 3 rules for a new agent here. Use <b>must</b>, <b>mustn't</b>, <b>have to</b> or <b>don't have to</b>.",
      "ph": "You must … You mustn't …",
      "ex": "You must be quiet in this corridor. You mustn't touch the lamps. You don't have to knock on the doors."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do every morning? What don't you have to do on Sundays?",
          "ph": "I have to … I don't have to …",
          "ex": "I have to catch the bus at seven. On Sundays I don't have to wake up early."
        },
        {
          "q": "What mustn't people do in your house or at your job?",
          "ph": "People mustn't …",
          "ex": "People mustn't smoke in my house. They don't have to take off their shoes."
        }
      ]
    }
  }
};
