/* STAMPS OF JAPAN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparativo e superlativo. Jogo: falas originais, sem violência e sem doença. A1: dicas em português só nas notas (d). Cena: duas estradas até o festival. */
window.HW2 = {
  "id": "faster-than-yesterday",
  "titulo": "Stamps of Japan",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d95107f03c20/faster-than-yesterday/img/live-keyart.webp",
  "alvo": "comparatives and superlatives: short word -er than / the -est (faster than, the fastest), long word more ... than / the most ... (more beautiful), rebels good -> better -> the best; errors: more fast, faster that, the most good",
  "abrir": "Which is faster: a car or a train?",
  "fecho": "Short word: <b>-er than</b> and <b>the -est</b> (<i>faster than, the fastest</i>). Long word: <b>more … than</b> and <b>the most …</b> (<i>more beautiful, the most beautiful</i>). Rebels: <i>good → better → the best</i>. Never <i>more fast</i>, never <i>faster that</i>.",
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
  "rate": "-18%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo drive to a car festival in Japan. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d95107f03c20/faster-than-yesterday/img/live-highway.webp",
      "leg": "The highway by the sea",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, there are two roads to the festival. Which one is better?"
        },
        {
          "quem": "mia",
          "t": "The highway is faster. It is shorter than the mountain road."
        },
        {
          "quem": "leo",
          "t": "But the mountain road is more beautiful. There are cherry trees."
        },
        {
          "quem": "mia",
          "t": "Yes, but it is slower, and it has more curves."
        },
        {
          "quem": "leo",
          "t": "How long is the highway?"
        },
        {
          "quem": "mia",
          "t": "Ninety minutes. The mountain road is two hours. It is the longest road."
        },
        {
          "quem": "leo",
          "t": "My red car is older than your car, but it is good in the curves."
        },
        {
          "quem": "mia",
          "t": "Okay. Let's take the mountain road. It's the most beautiful road in Japan!"
        },
        {
          "quem": "leo",
          "t": "And tomorrow we take the highway. It's the fastest."
        }
      ],
      "perguntas": [
        {
          "q": "Which road is faster?",
          "op": [
            "The highway",
            "The mountain road",
            "The city street"
          ],
          "a": 0,
          "por": "The highway is faster."
        },
        {
          "q": "Why does Leo like the mountain road?",
          "op": [
            "It is more beautiful",
            "It is shorter",
            "It is faster"
          ],
          "a": 0,
          "por": "But the mountain road is more beautiful."
        },
        {
          "q": "Which road is the longest?",
          "op": [
            "The mountain road",
            "The highway",
            "The city street"
          ],
          "a": 0,
          "por": "The mountain road is two hours. It is the longest road."
        }
      ]
    },
    "out": {
      "sub": "Three sentences on the road. Hear it, then say it.",
      "frases": [
        {
          "t": "The highway is faster than the mountain road.",
          "img": "https://wolf-labs.pages.dev/p/d95107f03c20/faster-than-yesterday/img/live-highway.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The mountain road is more beautiful.",
          "img": "https://wolf-labs.pages.dev/p/d95107f03c20/faster-than-yesterday/img/live-mountain.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This is the best car at the festival.",
          "img": "https://wolf-labs.pages.dev/p/d95107f03c20/faster-than-yesterday/img/live-meet.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-er, more, the best. Four quick ones.",
      "regra": "short word: <b>-er than</b> / <b>the -est</b> · long word: <b>more … than</b> / <b>the most …</b> · <b>good → better → the best</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My car is faster than your car.",
          "aceita": [],
          "d": "Dica: palavra curta: <b>fast</b> + <b>-er</b> + <b>than</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The red car is more fast than the blue car.",
          "r": "The red car is faster than the blue car.",
          "aceita": [],
          "d": "Dica: <b>fast</b> é palavra curta: <i>faster</i>, sem <i>more</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Tokyo is bigger that my city.",
          "r": "Tokyo is bigger than my city.",
          "aceita": [],
          "d": "Dica: depois do comparativo vem <b>than</b>, não <i>that</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "This is the most good car in the race.",
          "r": "This is the best car in the race.",
          "aceita": [],
          "d": "Dica: <b>good</b> é rebelde: good → better → <b>the best</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d95107f03c20/faster-than-yesterday/img/live-meet.webp",
      "leg": "Cars at a meeting at night",
      "pede": "Look at the picture: many cars at a meeting at night. Write 2 or 3 sentences. Compare two cars, and say which one is <b>the best</b>.",
      "ph": "The red car is … than …",
      "ex": "The red car is faster than the yellow car. The yellow car is more beautiful. The red car is the best."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Compare two cities you know. Which one is bigger? Which one is more beautiful?",
          "ph": "… is bigger than …",
          "ex": "São Paulo is bigger than Curitiba, but Curitiba is more beautiful."
        },
        {
          "q": "What is the best place in your city?",
          "ph": "The best place in my city is …",
          "ex": "The best place in my city is the park. It is the biggest and the most beautiful."
        }
      ]
    }
  }
};
