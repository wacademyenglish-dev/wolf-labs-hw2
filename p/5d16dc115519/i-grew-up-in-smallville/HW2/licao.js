/* I GREW UP IN SMALLVILLE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple (grew up, moved, didn't + verbo, Did he...?). A2: dicas em português só nas notas (d). Falas originais, sem cena do filme. Só imagens live-* escuras. */
window.HW2 = {
  "id": "i-grew-up-in-smallville",
  "titulo": "I Grew Up in Smallville",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5d16dc115519/i-grew-up-in-smallville/img/live-capa.webp",
  "alvo": "past simple: regular -ed (moved), irregular (grew up, came, met, had, went, got), didn't + base verb, Did he ...? + base verb; never comed, growed, didn't went, Did he moved",
  "abrir": "Where did you grow up?",
  "fecho": "<b>Past simple</b>: regular verbs take <b>-ed</b> (<i>moved</i>); irregular ones change (<i>grew, came, met, had, went</i>). No: <b>didn't</b> + the plain verb: <i>He didn't stay.</i> Question: <b>Did he</b> + the plain verb: <i>Did he move?</i> Never <i>comed, growed, didn't went, Did he moved</i>.",
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
      "sub": "Mia and Leo look at an old photo from a barn. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5d16dc115519/i-grew-up-in-smallville/img/live-celeiro.webp",
      "leg": "An old barn with string lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this old photo from the barn. Who is the boy?"
        },
        {
          "quem": "mia",
          "t": "That is Clark. He grew up on a farm in Kansas."
        },
        {
          "quem": "leo",
          "t": "Did he stay there all his life?"
        },
        {
          "quem": "mia",
          "t": "No, he didn't. He moved to the big city when he was twenty."
        },
        {
          "quem": "leo",
          "t": "What did he do there?"
        },
        {
          "quem": "mia",
          "t": "He got a job at a newspaper. He met Lois at work."
        },
        {
          "quem": "leo",
          "t": "Did they stay in the city?"
        },
        {
          "quem": "mia",
          "t": "For a while. They had two boys. Then the family went back to the farm."
        },
        {
          "quem": "leo",
          "t": "Why did they go back?"
        },
        {
          "quem": "mia",
          "t": "They wanted a quiet life, and the boys didn't like the noise."
        }
      ],
      "perguntas": [
        {
          "q": "Where did Clark grow up?",
          "op": [
            "On a farm in Kansas",
            "In the big city",
            "At a newspaper"
          ],
          "a": 0,
          "por": "He grew up on a farm in Kansas."
        },
        {
          "q": "Where did he meet Lois?",
          "op": [
            "At work",
            "On the farm",
            "At school"
          ],
          "a": 0,
          "por": "He got a job at a newspaper. He met Lois at work."
        },
        {
          "q": "Why did the family go back to the farm?",
          "op": [
            "They wanted a quiet life",
            "The boys wanted to travel",
            "Lois lost her job"
          ],
          "a": 0,
          "por": "They wanted a quiet life, and the boys didn't like the noise."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a life story. Hear it, then say it.",
      "frases": [
        {
          "t": "Clark grew up on a farm in Kansas.",
          "img": "https://wolf-labs.pages.dev/p/5d16dc115519/i-grew-up-in-smallville/img/live-celeiro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He moved to the city and met Lois.",
          "img": "https://wolf-labs.pages.dev/p/5d16dc115519/i-grew-up-in-smallville/img/live-metropole.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "They didn't stay in the city.",
          "img": "https://wolf-labs.pages.dev/p/5d16dc115519/i-grew-up-in-smallville/img/live-estrada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "grew up, moved, didn't + verb, Did he + verb. Four quick ones.",
      "regra": "regular <b>-ed</b> · irregular: <b>grew, came, met, had, went</b> · <b>didn't</b> + plain verb · <b>Did he</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The family went back to the farm.",
          "aceita": [],
          "d": "Dica: <b>go</b> é irregular: no passado vira <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Clark growed up on a farm.",
          "r": "Clark grew up on a farm.",
          "aceita": [],
          "d": "Dica: <b>grow</b> é irregular: o passado é <b>grew</b>, nunca 'growed'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They didn't went back to the city.",
          "r": "They didn't go back to the city.",
          "aceita": [
            "They did not go back to the city."
          ],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica no básico: <b>go</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Did he moved to the city?",
          "r": "Did he move to the city?",
          "aceita": [],
          "d": "Dica: depois de <b>Did he</b>, o verbo fica no básico: <b>move</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5d16dc115519/i-grew-up-in-smallville/img/live-estrada.webp",
      "leg": "A road to the city at night",
      "pede": "Look at the picture: a road to the city at night. Write 2 or 3 sentences about a place you lived in or moved from. Use <b>grew up</b>, <b>moved</b> and <b>didn't</b>.",
      "ph": "I grew up in … I moved to … I didn't …",
      "ex": "I grew up in a small town. I moved to São Paulo in 2019. I didn't like the noise at first."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where did you grow up? Did you stay there?",
          "ph": "I grew up in … I moved / stayed …",
          "ex": "I grew up in a small town. I moved to the city when I was eighteen."
        },
        {
          "q": "What did you do last weekend? What didn't you do?",
          "ph": "I … I didn't …",
          "ex": "I visited my aunt. I didn't go to the gym."
        }
      ]
    }
  }
};
