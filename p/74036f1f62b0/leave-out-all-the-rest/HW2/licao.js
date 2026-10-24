/* LEAVE OUT ALL THE REST · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: remember / forget / stop + to x -ing. Linha de música: NENHUM verso aqui; cena neutra de mudança de casa. B1: nenhum português. */
window.HW2 = {
  "id": "leave-out-all-the-rest",
  "titulo": "Leave Out All the Rest",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/74036f1f62b0/leave-out-all-the-rest/img/live-estrada.webp",
  "alvo": "remember / forget / stop + to + verb (a task: remember to lock, forget to pack, stop to rest) versus + -ing (a memory or a habit: remember locking, stop worrying)",
  "abrir": "What did you forget to do this week?",
  "fecho": "<b>Remember / forget / stop + to + verb</b> = a task: <i>Remember to lock the door. I stopped to rest.</i> <b>+ -ing</b> = a memory or something you quit: <i>I remember locking it. Stop worrying.</i>",
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
      "sub": "Mia and Leo pack the last boxes before a move. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/74036f1f62b0/leave-out-all-the-rest/img/live-estrada.webp",
      "leg": "A road at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, are you almost ready? Did you remember to lock the front door?"
        },
        {
          "quem": "leo",
          "t": "Yes, I remembered to lock it. I even remember locking it, because I heard the click."
        },
        {
          "quem": "mia",
          "t": "Good. Don't forget to take the keys."
        },
        {
          "quem": "leo",
          "t": "I won't forget to take them. They are in my coat. But I forgot to pack my charger yesterday."
        },
        {
          "quem": "mia",
          "t": "Stop looking for it everywhere. Check the blue box."
        },
        {
          "quem": "leo",
          "t": "Wait. I remember putting it in that box!"
        },
        {
          "quem": "mia",
          "t": "See? Then stop worrying. I'm tired, so I'll stop to have a coffee."
        },
        {
          "quem": "leo",
          "t": "Good idea. I'll stop packing for ten minutes."
        },
        {
          "quem": "mia",
          "t": "Tomorrow we'll be on the road at six. Don't forget to set your alarm."
        },
        {
          "quem": "leo",
          "t": "I won't. I never forget to set it."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo remember to do?",
          "op": [
            "Lock the front door",
            "Pack the charger",
            "Set an alarm"
          ],
          "a": 0,
          "por": "I remembered to lock it."
        },
        {
          "q": "Where does Leo remember putting the charger?",
          "op": [
            "In the blue box",
            "In his coat",
            "On the road"
          ],
          "a": 0,
          "por": "I remember putting it in that box."
        },
        {
          "q": "Why will Mia stop?",
          "op": [
            "To have a coffee",
            "To look for the keys",
            "To lock the door"
          ],
          "a": 0,
          "por": "I'll stop to have a coffee."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about moving day. Hear it, then say it.",
      "frases": [
        {
          "t": "We stopped to look at the stars on the road.",
          "img": "https://wolf-labs.pages.dev/p/74036f1f62b0/leave-out-all-the-rest/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I remember putting the metal box in the car.",
          "img": "https://wolf-labs.pages.dev/p/74036f1f62b0/leave-out-all-the-rest/img/live-capsula.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Don't forget to close the window before you leave.",
          "img": "https://wolf-labs.pages.dev/p/74036f1f62b0/leave-out-all-the-rest/img/live-janela.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "to or -ing? Four quick ones.",
      "regra": "<b>remember / forget / stop + to + verb</b> = a task · <b>+ -ing</b> = a memory or something you quit.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She stopped to buy some water on the road.",
          "aceita": [],
          "d": "Hint: <b>stopped to</b> + verb = she stopped in order to buy water."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't forget closing the window.",
          "r": "Don't forget to close the window.",
          "aceita": [
            "Do not forget to close the window."
          ],
          "d": "Hint: a task you must do: <b>forget to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Please stop to make noise.",
          "r": "Please stop making noise.",
          "aceita": [
            "Please stop making that noise."
          ],
          "d": "Hint: to quit something, <b>stop</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I remember to meet her last year in Rio.",
          "r": "I remember meeting her last year in Rio.",
          "aceita": [
            "I remember meeting her in Rio last year."
          ],
          "d": "Hint: a memory of the past: <b>remember</b> + verb-ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/74036f1f62b0/leave-out-all-the-rest/img/live-estrada.webp",
      "leg": "An empty road at night",
      "pede": "Look at the picture: an empty road at night. Imagine you are moving to a new city. Write 2 or 3 sentences: something you <b>remembered to</b> do, something you <b>forgot to</b> do, and something you <b>stopped</b> doing.",
      "ph": "I remembered to … but I forgot to …",
      "ex": "I remembered to take my keys. I forgot to say goodbye to my neighbor. I stopped worrying and started to drive."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you always forget to do?",
          "ph": "I always forget to …",
          "ex": "I always forget to drink water."
        },
        {
          "q": "Which place do you remember visiting as a child?",
          "ph": "I remember visiting …",
          "ex": "I remember visiting a small beach with my cousins."
        }
      ]
    }
  }
};
