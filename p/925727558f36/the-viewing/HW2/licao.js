/* THE VIEWING · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: comparativos e superlativos. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-viewing",
  "titulo": "The Viewing",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/925727558f36/the-viewing/img/live-capa.webp",
  "alvo": "comparatives and superlatives: bigger than, cheaper than, more expensive than, the quietest, the best; never more big, more cheaper, bigger that, gooder",
  "abrir": "What is important in a flat for you?",
  "fecho": "Short words take <b>-er / -est</b>: <i>cheaper than, the cheapest</i>. Long words take <b>more / the most</b>: <i>more expensive than</i>. One mark only: never <i>more cheaper</i>. And <b>than</b>, not <i>that</i>.",
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
      "sub": "Mia and Leo compare three flats in Edinburgh. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/925727558f36/the-viewing/img/live-a.webp",
      "leg": "An empty room with a big window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, flat A is bigger than flat B, but it's more expensive."
        },
        {
          "quem": "leo",
          "t": "How much is it?"
        },
        {
          "quem": "mia",
          "t": "Nine hundred and fifty pounds a month. Flat B is only seven hundred."
        },
        {
          "quem": "leo",
          "t": "So flat B is cheaper, but it's farther from the center."
        },
        {
          "quem": "mia",
          "t": "True. And flat C is the smallest, but it's the quietest."
        },
        {
          "quem": "leo",
          "t": "I think the quietest flat is the best one for me. I work from home."
        },
        {
          "quem": "mia",
          "t": "But the center is more interesting than a quiet street."
        },
        {
          "quem": "leo",
          "t": "Maybe. Which one is better for you?"
        },
        {
          "quem": "mia",
          "t": "Flat A. The windows are bigger, and the light is better."
        },
        {
          "quem": "leo",
          "t": "OK. Let's ask Mr. Douglas about the deposit."
        }
      ],
      "perguntas": [
        {
          "q": "Which flat is cheaper?",
          "op": [
            "Flat B",
            "Flat A",
            "Flat C"
          ],
          "a": 0,
          "por": "Flat B is only seven hundred, so flat B is cheaper."
        },
        {
          "q": "Why does Leo like flat C?",
          "op": [
            "It is the quietest",
            "It is the biggest",
            "It is the cheapest"
          ],
          "a": 0,
          "por": "The quietest flat is the best one for me."
        },
        {
          "q": "Why does Mia like flat A?",
          "op": [
            "The windows and the light are better",
            "It is the cheapest",
            "It is the quietest"
          ],
          "a": 0,
          "por": "The windows are bigger, and the light is better."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the flats. Hear it, then say it.",
      "frases": [
        {
          "t": "Flat A is bigger than flat B.",
          "img": "https://wolf-labs.pages.dev/p/925727558f36/the-viewing/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Flat C is the quietest flat of all.",
          "img": "https://wolf-labs.pages.dev/p/925727558f36/the-viewing/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This flat is more expensive than that one.",
          "img": "https://wolf-labs.pages.dev/p/925727558f36/the-viewing/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Bigger, cheaper, the best. Four quick ones.",
      "regra": "short word: <b>-er than</b> · long word: <b>more ... than</b> · the top one: <b>the -est / the most</b> · never <b>more</b> + <b>-er</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This flat is cheaper than the other one.",
          "aceita": [],
          "d": "Dica: <b>cheaper than</b> + o outro."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The flat is more big than my old flat.",
          "r": "The flat is bigger than my old flat.",
          "aceita": [],
          "d": "Dica: palavra curta usa <b>-er</b>: <b>bigger</b>, não <b>more big</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: too much comparing.",
          "mostra": "Flat C is more cheaper than flat B.",
          "r": "Flat C is cheaper than flat B.",
          "aceita": [],
          "d": "Dica: só uma marca: <b>cheaper</b>, sem <b>more</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the top one.",
          "mostra": "This is the more quiet flat of the three.",
          "r": "This is the quietest flat of the three.",
          "aceita": [
            "This is the quietest flat."
          ],
          "d": "Dica: o melhor dos três = <b>the quietest</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/925727558f36/the-viewing/img/live-a.webp",
      "leg": "An empty room with a big window",
      "pede": "Look at the picture: an empty room. Write 3 sentences comparing this flat with your home. Use <b>bigger, cheaper, more expensive</b> or <b>the best</b>.",
      "ph": "This flat is … than my home.",
      "ex": "This flat is smaller than my home, but it is cheaper. The windows are bigger. My home is the quietest."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is more important for you in a flat: the price or the size? Why?",
          "ph": "For me … is more important because …",
          "ex": "The price is more important for me because I don't have much money."
        },
        {
          "q": "Which is better: a big flat far from work or a small flat near work?",
          "ph": "A … flat is better because …",
          "ex": "A small flat near work is better because the trip is shorter."
        }
      ]
    }
  }
};
