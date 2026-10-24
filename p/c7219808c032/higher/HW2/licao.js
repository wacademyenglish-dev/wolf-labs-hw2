/* HIGHER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparativos e superlativos. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "higher",
  "titulo": "Higher",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c7219808c032/higher/img/live-capa.webp",
  "alvo": "comparatives and superlatives: short adjective + -er than (bigger, hotter, cheaper), long adjective: more ... than (more relaxing), irregular good-better-best / bad-worse-worst, the -est / the most; never more better, then for than, the more beautiful as a superlative",
  "abrir": "Which place is better for you: the city or the beach?",
  "fecho": "<b>-er than</b> for short words: <i>bigger, hotter, cheaper.</i> <b>more … than</b> for long words: <i>more relaxing.</i> Special: <i>good → better → the best</i>, <i>bad → worse → the worst</i>. The top of all: <b>the -est</b> or <b>the most</b>: <i>the biggest, the most beautiful.</i> Never <i>more better</i>. It is <b>than</b>, not <i>then</i>.",
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
      "sub": "Mia and Leo choose a city for a holiday. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c7219808c032/higher/img/live-cidade.webp",
      "leg": "A city at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I need a holiday. Which is better, Rio or Lisbon?"
        },
        {
          "quem": "mia",
          "t": "Rio is bigger and hotter than Lisbon. But Lisbon is cheaper."
        },
        {
          "quem": "leo",
          "t": "Which one is more relaxing?"
        },
        {
          "quem": "mia",
          "t": "Lisbon is quieter than Rio, so it is more relaxing."
        },
        {
          "quem": "leo",
          "t": "And what is the best thing about Lisbon?"
        },
        {
          "quem": "mia",
          "t": "The food! It has the best coffee, I think."
        },
        {
          "quem": "leo",
          "t": "Then Lisbon is the best choice. Is the flight longer?"
        },
        {
          "quem": "mia",
          "t": "Yes, it is longer, and it is more expensive. It is the worst part of the trip."
        }
      ],
      "perguntas": [
        {
          "q": "Which city is cheaper?",
          "op": [
            "Lisbon",
            "Rio",
            "Both are the same"
          ],
          "a": 0,
          "por": "Lisbon is cheaper."
        },
        {
          "q": "Why is Lisbon more relaxing?",
          "op": [
            "It is quieter than Rio",
            "It is bigger than Rio",
            "It is hotter than Rio"
          ],
          "a": 0,
          "por": "Lisbon is quieter than Rio, so it is more relaxing."
        },
        {
          "q": "What is the worst part of the trip?",
          "op": [
            "The flight",
            "The food",
            "The hotel"
          ],
          "a": 0,
          "por": "It is the worst part of the trip."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to compare. Hear it, then say it.",
      "frases": [
        {
          "t": "The city is bigger and more crowded than the town.",
          "img": "https://wolf-labs.pages.dev/p/c7219808c032/higher/img/live-cidade.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This studio is quieter than the stadium.",
          "img": "https://wolf-labs.pages.dev/p/c7219808c032/higher/img/live-estudio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The stadium is the biggest place in town.",
          "img": "https://wolf-labs.pages.dev/p/c7219808c032/higher/img/live-estadio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-er, more or the most? Four quick ones.",
      "regra": "<b>-er than</b> · <b>more … than</b> · <b>the -est</b> · <b>the most</b> · good → <b>better</b> → <b>the best</b> · never <i>more better</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Lisbon is more relaxing than Rio",
          "aceita": [],
          "d": "Dica: palavra longa: <b>more</b> + adjetivo + <b>than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Lisbon is more better than Rio.",
          "r": "Lisbon is better than Rio.",
          "aceita": [],
          "d": "Dica: better já é o comparativo de good: nada de <b>more</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Rio is hotter then Lisbon.",
          "r": "Rio is hotter than Lisbon.",
          "aceita": [],
          "d": "Dica: para comparar, use <b>than</b>, não 'then'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "This is the more beautiful city here.",
          "r": "This is the most beautiful city here.",
          "aceita": [],
          "d": "Dica: o topo de todos é <b>the most</b> + adjetivo, não 'the more'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c7219808c032/higher/img/live-estadio.webp",
      "leg": "A big stadium with blue lights",
      "pede": "Look at the picture: a big empty stadium with blue lights. Write 2 or 3 sentences: compare it with another place you know. Use <b>-er than</b>, <b>more … than</b> or <b>the biggest</b>.",
      "ph": "The stadium is bigger than …",
      "ex": "This stadium is bigger than my school. It is the biggest place I know. My room is smaller and quieter."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Compare two places you know. Which one is better?",
          "ph": "… is bigger / more … than …",
          "ex": "My city is smaller than Rio, but it is quieter."
        },
        {
          "q": "What is the best place you know? Why?",
          "ph": "The best place is … It is the …",
          "ex": "The beach near my house is the best place. It is the quietest."
        }
      ]
    }
  }
};
