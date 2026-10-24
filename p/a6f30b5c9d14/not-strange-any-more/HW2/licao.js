/* NOT STRANGE ANY MORE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to / be used to / get used to. B1: nenhum português. */
window.HW2 = {
  "id": "not-strange-any-more",
  "titulo": "Not Strange Any More",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a6f30b5c9d14/not-strange-any-more/img/live-canecas.webp",
  "alvo": "used to + verb (a past habit that stopped) / be used to + -ing or noun (normal now) / get used to + -ing or noun (still changing); never use to, never I will used to",
  "abrir": "What did you get used to in the last year?",
  "fecho": "<b>used to</b> + verb = a past habit that stopped: <i>I used to eat at one.</i> <b>be used to</b> + -ing or noun = normal now: <i>I'm used to the dark.</i> <b>get used to</b> = it is still changing: <i>I'm getting used to starting at seven.</i> In a question or a no, the first word loses the <b>-d</b>: <i>Did you use to ...?</i>",
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
      "sub": "Mia and Leo in the office kitchen, Mia's first week in Helsinki. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a6f30b5c9d14/not-strange-any-more/img/live-canecas.webp",
      "leg": "Three mugs on a winter window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, it's your first week in Helsinki. Is everything still strange?"
        },
        {
          "quem": "mia",
          "t": "A little. Lunch is at 11:30 here. In my old office, I used to eat at one."
        },
        {
          "quem": "leo",
          "t": "I know. I used to eat late too, but now I'm used to eating early."
        },
        {
          "quem": "mia",
          "t": "And the dark at three o'clock? I'm not used to it yet."
        },
        {
          "quem": "leo",
          "t": "You'll get used to it. In December I couldn't sleep, but now I'm used to working in the dark."
        },
        {
          "quem": "mia",
          "t": "Everybody starts at seven here. I used to start at nine, so I'm still getting used to that."
        },
        {
          "quem": "leo",
          "t": "And the quiet meetings?"
        },
        {
          "quem": "mia",
          "t": "I'm getting used to them. I used to talk a lot, and here people wait."
        },
        {
          "quem": "leo",
          "t": "What about first names? Are you used to calling the boss Anna?"
        },
        {
          "quem": "mia",
          "t": "That one is easy. I'm already used to it."
        }
      ],
      "perguntas": [
        {
          "q": "When did Mia use to eat lunch?",
          "op": [
            "At one o'clock",
            "At 11:30",
            "At noon"
          ],
          "a": 0,
          "por": "In my old office, I used to eat at one."
        },
        {
          "q": "What is Mia not used to yet?",
          "op": [
            "The dark at three o'clock",
            "Calling the boss by her first name",
            "Eating lunch early"
          ],
          "a": 0,
          "por": "And the dark at three o'clock? I'm not used to it yet."
        },
        {
          "q": "What is Mia getting used to?",
          "op": [
            "The quiet meetings",
            "First names",
            "Working in the dark"
          ],
          "a": 0,
          "por": "I'm getting used to them. I used to talk a lot, and here people wait."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about habits. Hear it, then say it.",
      "frases": [
        {
          "t": "I used to eat lunch at one, but now I eat at 11:30.",
          "img": "https://wolf-labs.pages.dev/p/a6f30b5c9d14/not-strange-any-more/img/live-canecas.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm not used to the dark at three o'clock yet.",
          "img": "https://wolf-labs.pages.dev/p/a6f30b5c9d14/not-strange-any-more/img/live-bg-desgaste.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm getting used to starting work at seven.",
          "img": "https://wolf-labs.pages.dev/p/a6f30b5c9d14/not-strange-any-more/img/live-canecas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to, be used to, get used to. Four quick ones.",
      "regra": "<b>used to</b> + verb = it stopped · <b>be used to</b> + -ing / noun = normal now · <b>get used to</b> = still changing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is used to working in the dark.",
          "aceita": [],
          "d": "Hint: <b>is used to</b> + verb-ing means it is normal now."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I use to eat lunch at one.",
          "r": "I used to eat lunch at one.",
          "aceita": [
            "I used to eat lunch at one."
          ],
          "d": "Hint: a past habit is <b>used to</b>, with -d."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "I'm not used to wake up early.",
          "r": "I'm not used to waking up early.",
          "aceita": [
            "I am not used to waking up early."
          ],
          "d": "Hint: after <b>be used to</b>, use verb-ing: <i>waking</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will used to the cold.",
          "r": "I will get used to the cold.",
          "aceita": [
            "I'll get used to the cold."
          ],
          "d": "Hint: it is still changing, so <b>get used to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a6f30b5c9d14/not-strange-any-more/img/live-bg-desgaste.webp",
      "leg": "A worn stair rail in the dark",
      "pede": "Look at the picture: a stair rail worn smooth by many hands. Write 2 or 3 sentences about something at work or school: a habit you <b>used to</b> have, one you <b>are used to</b>, or one you <b>are getting used to</b>.",
      "ph": "At work I used to … but now I'm used to …",
      "ex": "At work I used to arrive late, but now I'm used to arriving at eight. I'm still getting used to the new software."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do that you don't do any more?",
          "ph": "I used to … but now …",
          "ex": "I used to play football every Sunday, but now I walk in the park."
        },
        {
          "q": "What are you getting used to these days?",
          "ph": "I'm getting used to …",
          "ex": "I'm getting used to my new schedule at work."
        }
      ]
    }
  }
};
