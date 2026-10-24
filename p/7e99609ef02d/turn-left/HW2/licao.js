/* TURN LEFT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: directions: turn left, go up, at the end of. A1: dicas em português só nas notas (d). Só live-capa e live-prox (já escuras). */
window.HW2 = {
  "id": "turn-left",
  "titulo": "Turn Left",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7e99609ef02d/turn-left/img/live-capa.jpg",
  "alvo": "directions: turn left / turn right, go up / go down, go straight on, at the end of the road, at the top of the hill; start with the verb; never turn to the left, in the end of, go to up",
  "abrir": "How do you go from your home to a shop?",
  "fecho": "Start with the verb: <b>Turn left. Go up the hill. Go straight on.</b> <b>At the end of</b> the road, <b>at the top of</b> the hill. Never <i>turn to the left</i>, never <i>in the end of</i>.",
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
      "sub": "Mia helps Leo find a café. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/7e99609ef02d/turn-left/img/live-capa.jpg",
      "leg": "A quiet street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where are you?"
        },
        {
          "quem": "leo",
          "t": "I'm at the station. How do I go to the café?"
        },
        {
          "quem": "mia",
          "t": "Easy. Come out of the station. Turn left."
        },
        {
          "quem": "leo",
          "t": "Turn left. OK."
        },
        {
          "quem": "mia",
          "t": "Then go straight on. At the end of the road, turn right."
        },
        {
          "quem": "leo",
          "t": "Turn right at the end of the road. And then?"
        },
        {
          "quem": "mia",
          "t": "Go up the hill. The café is at the top."
        },
        {
          "quem": "leo",
          "t": "At the top of the hill? I can see it! It has a green door."
        },
        {
          "quem": "mia",
          "t": "Yes! Come in. I'm at the table by the window."
        }
      ],
      "perguntas": [
        {
          "q": "Where is the café?",
          "op": [
            "At the top of the hill",
            "At the station",
            "At the end of the street"
          ],
          "a": 0,
          "por": "Go up the hill. The café is at the top."
        },
        {
          "q": "When does Leo turn right?",
          "op": [
            "At the end of the road",
            "At the station",
            "At the café door"
          ],
          "a": 0,
          "por": "At the end of the road, turn right."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with directions. Hear it, then say it.",
      "frases": [
        {
          "t": "Turn left at the station.",
          "img": "https://wolf-labs.pages.dev/p/7e99609ef02d/turn-left/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Go up the hill.",
          "img": "https://wolf-labs.pages.dev/p/7e99609ef02d/turn-left/img/live-prox.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The shop is at the end of the road.",
          "img": "https://wolf-labs.pages.dev/p/7e99609ef02d/turn-left/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Turn, go, at the end of. Four quick ones.",
      "regra": "<b>Turn left</b> · <b>Go up</b> the hill · <b>At the end of</b> the road · start with the verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "At the end of the road turn right.",
          "aceita": [],
          "d": "Dica: <b>at the end of</b> + o lugar, depois o verbo: turn right."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Turn to the left at the station.",
          "r": "Turn left at the station.",
          "aceita": [
            "Turn left at the station"
          ],
          "d": "Dica: sem <b>to the</b>. Só <b>turn left</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The shop is in the end of the road.",
          "r": "The shop is at the end of the road.",
          "aceita": [
            "The shop is at the end of the road"
          ],
          "d": "Dica: 'no fim da rua' = <b>at the end of</b> the road."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Go to up the hill.",
          "r": "Go up the hill.",
          "aceita": [
            "Go up the hill"
          ],
          "d": "Dica: <b>go up</b>, sem <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7e99609ef02d/turn-left/img/live-prox.jpg",
      "leg": "A castle on a hill, with steps",
      "pede": "Look at the picture: a castle on a hill, with steps. Write 2 or 3 sentences: directions from the bottom to the castle. Use <b>Go up</b>, <b>Turn left</b> or <b>At the end of</b>.",
      "ph": "Go up the steps. At the end …",
      "ex": "Go up the steps. At the end of the path, turn left. The castle is at the top."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you go from your home to a shop? Give directions.",
          "ph": "Go out of my house. Turn …",
          "ex": "Go out of my house. Turn left. The shop is at the end of the road."
        },
        {
          "q": "Where is the nearest bus stop? How do you go there?",
          "ph": "Turn … Go straight on …",
          "ex": "Turn right. Go straight on. The bus stop is at the end of the road."
        }
      ]
    }
  }
};
