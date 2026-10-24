/* TURN LEFT AT THE BAKERY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: direções: turn left at, on your left, next to, opposite. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "turn-left-at-the-bakery",
  "titulo": "Turn Left at the Bakery",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/dd7c108f5ead/turn-left-at-the-bakery/img/live-capa.webp",
  "alvo": "directions: go straight, turn left / right AT a place, go past, cross, on your left / right, next to, between ... and ..., opposite; verb first, no to after turn, no in for turning",
  "abrir": "What is next to your home?",
  "fecho": "Directions start with the verb: <b>Go straight. Turn left at the bakery. Go past the bank. Cross the square.</b> A side: <b>on your left / right</b>. A place: <b>next to</b>, <b>between A and B</b>, <b>opposite</b>.",
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
      "sub": "Mia asks Leo the way. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/dd7c108f5ead/turn-left-at-the-bakery/img/live-padaria.webp",
      "leg": "The bakery window at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how do I get to the museum from the bus stop?"
        },
        {
          "quem": "leo",
          "t": "Easy. Go straight for two streets."
        },
        {
          "quem": "mia",
          "t": "OK. Then?"
        },
        {
          "quem": "leo",
          "t": "Turn left at the bakery. Go past the bank."
        },
        {
          "quem": "mia",
          "t": "The bank. Got it."
        },
        {
          "quem": "leo",
          "t": "Cross the square. The museum is on your right, next to the flower shop."
        },
        {
          "quem": "mia",
          "t": "Next to the flower shop. Is there a coffee shop?"
        },
        {
          "quem": "leo",
          "t": "Yes, the coffee shop is opposite the museum."
        },
        {
          "quem": "mia",
          "t": "Thanks! See you there."
        }
      ],
      "perguntas": [
        {
          "q": "Where does Mia turn left?",
          "op": [
            "At the bakery",
            "At the bank",
            "At the museum"
          ],
          "a": 0,
          "por": "Turn left at the bakery."
        },
        {
          "q": "Where is the museum?",
          "op": [
            "On the right, next to the flower shop",
            "On the left, next to the bank",
            "Opposite the bakery"
          ],
          "a": 0,
          "por": "The museum is on your right, next to the flower shop."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the way. Hear it, then say it.",
      "frases": [
        {
          "t": "Go straight, then turn left at the bakery.",
          "img": "https://wolf-labs.pages.dev/p/dd7c108f5ead/turn-left-at-the-bakery/img/live-padaria.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Go past the bank and cross the square.",
          "img": "https://wolf-labs.pages.dev/p/dd7c108f5ead/turn-left-at-the-bakery/img/live-vila.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The coffee shop is opposite the museum.",
          "img": "https://wolf-labs.pages.dev/p/dd7c108f5ead/turn-left-at-the-bakery/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "At, on or next to? Four quick ones.",
      "regra": "<b>Go straight</b> · <b>turn left AT</b> a place · <b>on your left</b> · <b>next TO</b> · <b>between A and B</b> · <b>opposite</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Go straight and turn left at the bakery.",
          "aceita": [],
          "d": "Dica: o verbo vem primeiro: <b>Go straight</b>, depois <b>turn left at</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Turn left in the bakery.",
          "r": "Turn left at the bakery.",
          "aceita": [],
          "d": "Dica: você vira <b>at</b> um lugar; 'in' seria dentro dele."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The bank is next of the shop.",
          "r": "The bank is next to the shop.",
          "aceita": [],
          "d": "Dica: sempre <b>next to</b>, nunca 'next of'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The shop is in your right.",
          "r": "The shop is on your right.",
          "aceita": [],
          "d": "Dica: o lado é <b>on</b> your right / left."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/dd7c108f5ead/turn-left-at-the-bakery/img/live-mapa.webp",
      "leg": "An old map and a pencil",
      "pede": "Look at the picture: an old map. Write 2 or 3 steps from your home to a place you like. Use <b>go straight</b>, <b>turn left / right at</b>, <b>on your left</b> or <b>next to</b>.",
      "ph": "From my home, go straight …",
      "ex": "Go straight and turn left at the bakery. The park is on your right, next to the bank."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is next to your home?",
          "ph": "… is next to my home.",
          "ex": "A small bakery is next to my home."
        },
        {
          "q": "How do you go from your home to the bus stop?",
          "ph": "Go straight … turn …",
          "ex": "Go straight, then turn right at the bank. The bus stop is on your left."
        }
      ]
    }
  }
};
