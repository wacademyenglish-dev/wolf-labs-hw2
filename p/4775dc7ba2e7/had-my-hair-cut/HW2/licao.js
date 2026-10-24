/* I HAD MY HAIR CUT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have / get something done. B1: nenhum portugues. Imagens live-* escuras. */
window.HW2 = {
  "id": "had-my-hair-cut",
  "titulo": "I Had My Hair Cut",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4775dc7ba2e7/had-my-hair-cut/img/live-capa.webp",
  "alvo": "have / get + the thing + past participle (somebody did it for you): I had my hair cut; the thing goes in the middle; I cut my hair = I did it myself; get is more informal",
  "abrir": "Who does things for you?",
  "fecho": "<b>have</b> + the thing + <b>participle</b>: somebody did it for you (<i>I had my hair cut.</i>). The thing goes in the middle: <i>She had her car washed.</i> <b>I cut my hair</b> = you held the scissors. <b>Get</b> works too, a bit more informal.",
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
      "sub": "Mia and Leo talk about a wedding. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/4775dc7ba2e7/had-my-hair-cut/img/live-vestido.webp",
      "leg": "A wedding dress on a stand",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look busy. Is the wedding this weekend?"
        },
        {
          "quem": "mia",
          "t": "Yes! My sister is getting married on Saturday, and she is having everything done by professionals."
        },
        {
          "quem": "leo",
          "t": "Everything?"
        },
        {
          "quem": "mia",
          "t": "She had her hair cut on Monday. She is having her dress shortened today, and tomorrow she is getting her shoes fixed."
        },
        {
          "quem": "leo",
          "t": "What about the cake? Did she make it herself?"
        },
        {
          "quem": "mia",
          "t": "No way. She had it made by a famous baker."
        },
        {
          "quem": "leo",
          "t": "And the car?"
        },
        {
          "quem": "mia",
          "t": "She had it washed on Wednesday. Next week she will have the photos printed."
        },
        {
          "quem": "leo",
          "t": "Do you do things yourself, Mia?"
        },
        {
          "quem": "mia",
          "t": "Sometimes. But I had my suit cleaned last week. I can't do that myself."
        }
      ],
      "perguntas": [
        {
          "q": "When did the bride have her hair cut?",
          "op": [
            "On Monday",
            "Today",
            "Next week"
          ],
          "a": 0,
          "por": "She had her hair cut on Monday."
        },
        {
          "q": "Who made the cake?",
          "op": [
            "A famous baker",
            "The bride herself",
            "Mia"
          ],
          "a": 0,
          "por": "She had it made by a famous baker."
        },
        {
          "q": "What is the bride getting fixed tomorrow?",
          "op": [
            "Her shoes",
            "Her dress",
            "Her car"
          ],
          "a": 0,
          "por": "Tomorrow she is getting her shoes fixed."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things done for you. Hear it, then say it.",
      "frases": [
        {
          "t": "She had her hair cut on Monday.",
          "img": "https://wolf-labs.pages.dev/p/4775dc7ba2e7/had-my-hair-cut/img/live-cabelo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I had my dress shortened last week.",
          "img": "https://wolf-labs.pages.dev/p/4775dc7ba2e7/had-my-hair-cut/img/live-vestido.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He is getting his car washed today.",
          "img": "https://wolf-labs.pages.dev/p/4775dc7ba2e7/had-my-hair-cut/img/live-carro.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have something done. Four quick ones.",
      "regra": "<b>have / get</b> + the thing + <b>participle</b> · the thing goes in the middle · <i>I cut my hair</i> = I did it myself.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is having her shoes fixed today.",
          "aceita": [],
          "d": "Hint: <b>is having</b> + the thing + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I had my car wash yesterday.",
          "r": "I had my car washed yesterday.",
          "aceita": [
            "I got my car washed yesterday."
          ],
          "d": "Hint: after the thing, use the participle: <b>washed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "He had fixed his phone at a shop.",
          "r": "He had his phone fixed at a shop.",
          "aceita": [
            "He got his phone fixed at a shop."
          ],
          "d": "Hint: the thing goes in the middle: <b>had his phone fixed</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: somebody else did it.",
          "mostra": "I cut my hair at the salon.",
          "r": "I had my hair cut at the salon.",
          "aceita": [
            "I got my hair cut at the salon."
          ],
          "d": "Hint: <i>I cut my hair</i> means you did it yourself. A salon did it for you."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4775dc7ba2e7/had-my-hair-cut/img/live-vestido.webp",
      "leg": "A wedding dress on a stand",
      "pede": "Look at the picture: a wedding dress on a stand. Write 2 or 3 sentences about things you had done by someone else, or things you need to have done. Use <b>had … done</b> or <b>need to have … done</b>.",
      "ph": "I had my … done. I need to have my …",
      "ex": "I had my phone screen fixed last month. I need to have my hair cut. I had my coat cleaned for the party."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was the last thing you had done by someone else?",
          "ph": "I had my … done …",
          "ex": "I had my phone screen fixed last month."
        },
        {
          "q": "What do you need to have done soon?",
          "ph": "I need to have my … done.",
          "ex": "I need to have my bike repaired."
        }
      ]
    }
  }
};
