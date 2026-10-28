/* SPEAK ABOUT THE PHOTO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Speak About the Photo: route, places, there is/are, might. B1: nenhum português. Só as imagens live-* da própria aula (todas escuras). */
window.HW2 = {
  "id": "det-speak-about-the-photo",
  "titulo": "Speak About the Photo",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "describing a photo with a route: big picture (This photo shows) → places (in the foreground, in the background, on the left, next to) → details (there is / there are) → a guess with a reason (It might be ... because ...)",
  "abrir": "Look around you. How would you describe this place to a friend in one sentence?",
  "fecho": "A photo has a route: <b>big picture</b> (This photo shows…), <b>places</b> (in the foreground, in the background, on the left), <b>details</b> (there is / there are), <b>a guess</b> (It might be… because…). Four steps fill ninety seconds.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia helps Leo describe a photo. A new scene, about one minute.",
      "img": "../img/live-foto-mercado.webp",
      "leg": "A market in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have twenty seconds to describe this photo. Help me."
        },
        {
          "quem": "mia",
          "t": "Start with the big picture. This photo shows a night market."
        },
        {
          "quem": "leo",
          "t": "This photo shows a night market. What next?"
        },
        {
          "quem": "mia",
          "t": "Say where things are. In the foreground, there are crates of oranges."
        },
        {
          "quem": "leo",
          "t": "In the foreground, there are crates of oranges. And in the background?"
        },
        {
          "quem": "mia",
          "t": "In the background, there are lights over the stalls. Now add details: colors, light."
        },
        {
          "quem": "leo",
          "t": "The lights are warm, and the oranges look very bright."
        },
        {
          "quem": "mia",
          "t": "Good. Finish with a guess and a reason. It might be a street in Spain, because the fruit looks fresh."
        },
        {
          "quem": "leo",
          "t": "It might be a street in Spain, because the lights look like a festival."
        },
        {
          "quem": "mia",
          "t": "Great. Big picture, places, details, a guess. Ninety seconds pass fast."
        }
      ],
      "perguntas": [
        {
          "q": "How should the description start?",
          "op": [
            "With the big picture",
            "With a guess",
            "With a small detail"
          ],
          "a": 0,
          "por": "Start with the big picture."
        },
        {
          "q": "Which phrase shows where things are?",
          "op": [
            "In the foreground",
            "It might be",
            "This photo shows"
          ],
          "a": 0,
          "por": "Say where things are: in the foreground."
        },
        {
          "q": "How does Mia want Leo to finish?",
          "op": [
            "With a guess and a reason",
            "With a question",
            "With a list of colors"
          ],
          "a": 0,
          "por": "Finish with a guess and a reason."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about photos. Hear it, then say it.",
      "frases": [
        {
          "t": "This photo shows a market in the evening, with warm lights.",
          "img": "../img/live-foto-mercado.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "In the foreground, there is a big pot on the stove.",
          "img": "../img/live-foto-cozinha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It might be a quiet station, because there are no people around.",
          "img": "../img/live-foto-estacao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Places, there is / are, might. Four quick ones.",
      "regra": "<b>in the</b> foreground / background · <b>there is</b> + singular, <b>there are</b> + plural · <b>might be</b> + a reason.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "In the background, there are some bright lights.",
          "aceita": [],
          "d": "Hint: a place word first, then <b>there are</b> + plural."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There is many boxes on the table.",
          "r": "There are many boxes on the table.",
          "aceita": [],
          "d": "Hint: <b>many boxes</b> is plural: <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It might is a small station.",
          "r": "It might be a small station.",
          "aceita": [],
          "d": "Hint: after <b>might</b>, use the base verb: <b>be</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "On the background, there is a tree.",
          "r": "In the background, there is a tree.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>in the background</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-foto-estacao.webp",
      "leg": "A small station at night",
      "pede": "Look at the picture: a small station at night. Write 2 or 3 sentences about it. Use <b>in the foreground</b>, <b>there is / there are</b> and <b>It might be … because</b>.",
      "ph": "This photo shows …",
      "ex": "This photo shows a small station at night. In the foreground, there is a bench under a lamp. It might be a quiet town, because there are no cars."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "You have 20 seconds. Describe the view from your window. Start with the big picture.",
          "ph": "From my window, I can see …",
          "ex": "From my window, I can see a busy street with many parked cars."
        },
        {
          "q": "Look around you. Make a guess with a reason about the time of day or the weather.",
          "ph": "It might be … because …",
          "ex": "It might be late afternoon, because the light is soft."
        }
      ]
    }
  }
};
