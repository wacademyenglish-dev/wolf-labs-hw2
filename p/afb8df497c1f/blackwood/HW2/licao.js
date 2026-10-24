/* BLACKWOOD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous + past simple (when / while). B1: nenhum português. Falas originais, sem violência. */
window.HW2 = {
  "id": "blackwood",
  "titulo": "Blackwood",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/afb8df497c1f/blackwood/img/live-cabana.webp",
  "alvo": "past continuous + past simple: was / were + -ing for the long action in progress, past simple for the short action that interrupts it; while + the long action, when + the short one; What were you doing? / What did you do?",
  "abrir": "What were you doing at nine o'clock last night?",
  "fecho": "The <b>long action</b> in progress: <b>was / were + -ing</b>. The <b>short action</b> that interrupts it: the <b>past simple</b>. <i>I was editing a tape when the lights went out.</i> <b>While</b> + the long one, <b>when</b> + the short one. Questions: <b>What were you doing?</b> / <b>What did you do?</b>",
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
      "sub": "Mia and Leo talk about a night at the radio station. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/afb8df497c1f/blackwood/img/live-telefone.webp",
      "leg": "Two old phones on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you were at the station last night. What were you doing when the power went out?"
        },
        {
          "quem": "mia",
          "t": "I was editing a tape when the lights went off."
        },
        {
          "quem": "leo",
          "t": "And what did you do?"
        },
        {
          "quem": "mia",
          "t": "I found a torch in a drawer. While I was looking for it, the phone rang."
        },
        {
          "quem": "leo",
          "t": "Who was calling?"
        },
        {
          "quem": "mia",
          "t": "Nobody. It was only the wind. It was blowing hard, and the window was shaking."
        },
        {
          "quem": "leo",
          "t": "Where was Sam?"
        },
        {
          "quem": "mia",
          "t": "He was making tea in the kitchen when it happened. He dropped the cup and laughed."
        },
        {
          "quem": "leo",
          "t": "So what did you do next?"
        },
        {
          "quem": "mia",
          "t": "We sat on the floor and told stories until the lights came back."
        }
      ],
      "perguntas": [
        {
          "q": "What was Mia doing when the lights went out?",
          "op": [
            "Editing a tape",
            "Making tea",
            "Answering the phone"
          ],
          "a": 0,
          "por": "I was editing a tape when the lights went off."
        },
        {
          "q": "What was shaking the window?",
          "op": [
            "The wind",
            "A visitor",
            "The phone"
          ],
          "a": 0,
          "por": "It was only the wind. It was blowing hard, and the window was shaking."
        },
        {
          "q": "What did they do until the lights came back?",
          "op": [
            "Sat on the floor and told stories",
            "Went home",
            "Called the police"
          ],
          "a": 0,
          "por": "We sat on the floor and told stories until the lights came back."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the night. Hear it, then say it.",
      "frases": [
        {
          "t": "I was editing a tape when the lights went out.",
          "img": "https://wolf-labs.pages.dev/p/afb8df497c1f/blackwood/img/live-telefone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "While I was looking for a torch, the phone rang.",
          "img": "https://wolf-labs.pages.dev/p/afb8df497c1f/blackwood/img/live-caderno.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We were telling stories when the lights came back.",
          "img": "https://wolf-labs.pages.dev/p/afb8df497c1f/blackwood/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was / were + -ing, or the past simple? Four quick ones.",
      "regra": "<b>was / were + -ing</b> = the long action · <b>past simple</b> = the short action · <b>while</b> + long · <b>when</b> + short.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was making tea when the phone rang.",
          "aceita": [],
          "d": "Hint: the long action first (<b>was making</b>), then the short one (<b>rang</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He were making tea when the phone rang.",
          "r": "He was making tea when the phone rang.",
          "aceita": [],
          "d": "Hint: <b>he</b> takes <b>was</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "While we were listening to the tape, the lights were going out.",
          "r": "While we were listening to the tape, the lights went out.",
          "aceita": [
            "When we were listening to the tape, the lights went out."
          ],
          "d": "Hint: the short action that interrupts is the <b>past simple</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What did you doing when the lights came back?",
          "r": "What did you do when the lights came back?",
          "aceita": [],
          "d": "Hint: after <b>did you</b>, the base verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/afb8df497c1f/blackwood/img/live-cabana.webp",
      "leg": "A small cabin in the woods at night",
      "pede": "Look at the picture: a small cabin in the woods at night. Imagine you were there last night. Write 2 or 3 sentences: what you were doing when something happened, and what you did. Use <b>was / were + -ing</b> and the <b>past simple</b>, with <b>when</b> or <b>while</b>.",
      "ph": "I was reading when …",
      "ex": "I was reading by the window when the lights went out. While I was looking for a candle, I heard the wind in the trees. I sat quietly and waited."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing at nine o'clock last night?",
          "ph": "At nine I was …",
          "ex": "At nine I was cooking dinner and listening to music."
        },
        {
          "q": "What happened while you were doing something this week?",
          "ph": "While I was …-ing, …",
          "ex": "My sister called while I was washing the dishes, so I answered with wet hands."
        }
      ]
    }
  }
};
