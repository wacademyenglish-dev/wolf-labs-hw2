/* THE MAGELLAN COUNCIL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first and second conditional, unless. B2: nenhum portugues. Jogo: falas originais, sem violencia. So imagens live-* escuras (<50). */
window.HW2 = {
  "id": "the-magellan-council",
  "titulo": "The Magellan Council",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d8a38158933a/the-magellan-council/img/live-ship.webp",
  "alvo": "first conditional (if + present, will: a real plan) and second conditional (if + past, would: a dream or a present unreal); unless = if not (never unless + negative); never if + will, never if + would",
  "abrir": "If you lived on a ship for a year, what would you miss most?",
  "fecho": "<b>A real plan</b>: <b>if + present, will</b>: <i>If we connect the farm, the valley will get news.</i> <b>A dream</b>: <b>if + past, would</b>: <i>If we had a bigger ship, we would go.</i> Never <i>if + will</i>, never <i>if + would</i>. <b>Unless</b> = if not: <i>Unless you hurry, we will miss the boat.</i>",
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
      "sub": "Mia and Leo before a council meeting. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d8a38158933a/the-magellan-council/img/live-farm.webp",
      "leg": "A far farm under a dark sky",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the council meets in an hour. Which outpost should we connect first?"
        },
        {
          "quem": "leo",
          "t": "The farm. If we connect the farm, the whole valley will get light and news."
        },
        {
          "quem": "mia",
          "t": "That is a real plan. But what about the island? If we had a bigger ship, we would visit it too."
        },
        {
          "quem": "leo",
          "t": "We don't have one. So if we go to the island, we will lose a week. Unless the weather helps us."
        },
        {
          "quem": "mia",
          "t": "If the weather were better, we would leave tomorrow."
        },
        {
          "quem": "leo",
          "t": "But it isn't. If we wait, the roads will be dry by Friday."
        },
        {
          "quem": "mia",
          "t": "Then I will vote for the farm. What would you do if you could choose any place?"
        },
        {
          "quem": "leo",
          "t": "If I could choose, I would build a school on the island."
        },
        {
          "quem": "mia",
          "t": "A nice dream. If the council agrees, we will start with the farm."
        },
        {
          "quem": "leo",
          "t": "And if it says no, we will try again next month."
        }
      ],
      "perguntas": [
        {
          "q": "What will happen if they connect the farm?",
          "op": [
            "The valley will get light and news",
            "The island will get a school",
            "The ship will be bigger"
          ],
          "a": 0,
          "por": "If we connect the farm, the whole valley will get light and news."
        },
        {
          "q": "Why can't they visit the island now?",
          "op": [
            "They don't have a bigger ship",
            "The island is closed",
            "The council said no"
          ],
          "a": 0,
          "por": "If we had a bigger ship, we would visit it too."
        },
        {
          "q": "What would Leo do if he could choose any place?",
          "op": [
            "Build a school on the island",
            "Visit the farm",
            "Buy a new ship"
          ],
          "a": 0,
          "por": "If I could choose, I would build a school on the island."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the council. Hear it, then say it.",
      "frases": [
        {
          "t": "If we connect the farm, the valley will get news.",
          "img": "https://wolf-labs.pages.dev/p/d8a38158933a/the-magellan-council/img/live-farm.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If we had a bigger ship, we would go.",
          "img": "https://wolf-labs.pages.dev/p/d8a38158933a/the-magellan-council/img/live-ship.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Unless the weather helps, we will wait until Friday.",
          "img": "https://wolf-labs.pages.dev/p/d8a38158933a/the-magellan-council/img/live-mine.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A plan or a dream? Four quick ones.",
      "regra": "<b>if + present, will</b> = real plan · <b>if + past, would</b> = dream · <b>unless</b> = if not · never <i>if + will</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If we connect the farm, more people will join.",
          "aceita": [],
          "d": "Hint: a real plan: <b>if</b> + present, <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If the council will agree, we will start tomorrow.",
          "r": "If the council agrees, we will start tomorrow.",
          "aceita": [
            "If the council agrees, we'll start tomorrow."
          ],
          "d": "Hint: after <b>if</b>, use the present, never <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have a ship, I would sail.",
          "r": "If I had a ship, I would sail.",
          "aceita": [
            "If I had a ship, I'd sail."
          ],
          "d": "Hint: a dream is <b>if + past</b>, never <i>if + would</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Unless you don't hurry, we will miss the boat.",
          "r": "Unless you hurry, we will miss the boat.",
          "aceita": [
            "Unless you hurry, we'll miss the boat."
          ],
          "d": "Hint: <b>unless</b> already means <i>if not</i>: no <i>don't</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d8a38158933a/the-magellan-council/img/live-ship.webp",
      "leg": "A ship on dark water",
      "pede": "Look at the picture: a ship on dark water. Write 2 or 3 sentences: one real plan (<b>if + present, will</b>) and one dream (<b>if + past, would</b>).",
      "ph": "If I have time, I will … If I had a ship, I would …",
      "ex": "If I finish early, I will call my friend. If I had a ship, I would visit every island."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do if the weather is good this weekend?",
          "ph": "If the weather is good, I will …",
          "ex": "If the weather is good, I will go to the beach."
        },
        {
          "q": "If you could live anywhere, where would you live?",
          "ph": "If I could, I would live …",
          "ex": "If I could, I would live near the sea."
        }
      ]
    }
  }
};
