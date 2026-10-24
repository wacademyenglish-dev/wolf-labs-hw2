/* HOUSE OF GOLD · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will / won't / I'll. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "house-of-gold",
  "titulo": "House of Gold",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/503758daa245/house-of-gold/img/live-capa.webp",
  "alvo": "will / won't + plain verb for promises and I'll for offers (I will help you, I won't forget, I'll carry it); Will you ...? Yes, I will / No, I won't; never will to, never will + -s, never don't will",
  "abrir": "What is one promise you can keep this week?",
  "fecho": "A promise: <b>will</b> + plain verb: <i>I will call you.</i> The no: <b>won't</b>: <i>I won't forget.</i> An offer: <b>I'll</b>: <i>I'll carry the box.</i> Question: <i>Will you help me?</i> Answer: <i>Yes, I will. / No, I won't.</i> Never <i>will to</i>, never <i>she will helps</i>.",
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
      "sub": "Leo has a new house. Mia makes promises. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/503758daa245/house-of-gold/img/live-capa.webp",
      "leg": "A small house with warm lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm moving to a new house on Saturday."
        },
        {
          "quem": "mia",
          "t": "Great! I'll help you. I will bring my car."
        },
        {
          "quem": "leo",
          "t": "Will you carry the big boxes?"
        },
        {
          "quem": "mia",
          "t": "Yes, I will. And my brother will help us too."
        },
        {
          "quem": "leo",
          "t": "Thank you. I won't forget this."
        },
        {
          "quem": "mia",
          "t": "Don't worry. Will you cook for us after?"
        },
        {
          "quem": "leo",
          "t": "Yes, I will. I'll make pizza."
        },
        {
          "quem": "mia",
          "t": "Perfect. I won't be late. I promise."
        }
      ],
      "perguntas": [
        {
          "q": "What will Mia bring?",
          "op": [
            "Her car",
            "Her dog",
            "A pizza"
          ],
          "a": 0,
          "por": "I will bring my car."
        },
        {
          "q": "Who will help Leo too?",
          "op": [
            "Mia's brother",
            "Mia's mother",
            "Nobody"
          ],
          "a": 0,
          "por": "My brother will help us too."
        },
        {
          "q": "What will Leo make after the move?",
          "op": [
            "Pizza",
            "Rice",
            "A cake"
          ],
          "a": 0,
          "por": "I'll make pizza."
        }
      ]
    },
    "out": {
      "sub": "Three promises to a friend. Hear it, then say it.",
      "frases": [
        {
          "t": "I will help you on Saturday.",
          "img": "https://wolf-labs.pages.dev/p/503758daa245/house-of-gold/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I won't forget your birthday.",
          "img": "https://wolf-labs.pages.dev/p/503758daa245/house-of-gold/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Will you carry the boxes? Yes, I will.",
          "img": "https://wolf-labs.pages.dev/p/503758daa245/house-of-gold/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will or won't? Four quick ones.",
      "regra": "<b>will</b> + plain verb · <b>won't</b> = no · <b>I'll</b> = offer · never <b>will to</b>, never <b>will + -s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will bring the pizza on Saturday.",
          "aceita": [],
          "d": "Dica: <b>will</b> + verbo limpo (bring)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to call you tomorrow.",
          "r": "I will call you tomorrow.",
          "aceita": [
            "I'll call you tomorrow."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She will helps us on Saturday.",
          "r": "She will help us on Saturday.",
          "aceita": [
            "She'll help us on Saturday."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo não leva -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't will forget your party.",
          "r": "I won't forget your party.",
          "aceita": [
            "I will not forget your party."
          ],
          "d": "Dica: o não de will é <b>won't</b>, nunca 'don't will'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/503758daa245/house-of-gold/img/live-capa.webp",
      "leg": "A small house with warm windows",
      "pede": "Look at the picture: a small house with warm windows. Write 2 or 3 promises to a friend who moves to this house. Use <b>will</b>, <b>won't</b> or <b>I'll</b>.",
      "ph": "I will … I won't …",
      "ex": "I will help you with the boxes. I won't be late. I'll bring dinner."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend? Name two things.",
          "ph": "This weekend I will … and …",
          "ex": "This weekend I will clean my room and call my friend."
        },
        {
          "q": "Make a promise to a friend. Use I won't.",
          "ph": "I won't …",
          "ex": "I won't tell your secret. I will always answer your calls."
        }
      ]
    }
  }
};
