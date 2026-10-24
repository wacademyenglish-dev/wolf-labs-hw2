/* THE MORE I FIGHT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: the more..., the more...; comparative and comparative. B1: nenhum português. Só imagens live-* escuras. Falas originais, sem violência. */
window.HW2 = {
  "id": "the-more-i-fight",
  "titulo": "The More I Fight",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/55c8e25f5ff7/the-more-i-fight/img/live-capa.webp",
  "alvo": "the + comparative, the + comparative (The more I practice, the better I get); comparative and comparative (stronger and stronger); never the more early, more good",
  "abrir": "What do you get better at the more you practice?",
  "fecho": "<b>The + comparative, the + comparative</b>: <i>The more I practice, the better I get.</i> Short adjectives take <b>-er</b>: <i>The earlier I start, the sooner I finish.</i> <b>Comparative and comparative</b> = it keeps growing: <i>stronger and stronger</i>. Not <i>the more early</i> or <i>more good</i>.",
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
      "sub": "Mia and Leo talk about training for a job. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/55c8e25f5ff7/the-more-i-fight/img/live-portal.webp",
      "leg": "A bright gate in a city street",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the new training hall near the gate opened this morning. Are you going?"
        },
        {
          "quem": "mia",
          "t": "Of course. The more I practice, the better I get."
        },
        {
          "quem": "leo",
          "t": "Me too. The harder I study the map, the easier the gate rules become."
        },
        {
          "quem": "mia",
          "t": "And the more quests I finish, the stronger I feel."
        },
        {
          "quem": "leo",
          "t": "But the higher the rank, the heavier the work."
        },
        {
          "quem": "mia",
          "t": "True. The earlier I wake up, the more time I have. So I'm getting up at five."
        },
        {
          "quem": "leo",
          "t": "At five? The earlier the better, I guess, but the sleepier I get!"
        },
        {
          "quem": "mia",
          "t": "Then go to bed earlier. The more you rest, the faster you learn."
        },
        {
          "quem": "leo",
          "t": "OK. The sooner we start, the sooner we finish. Let's go."
        }
      ],
      "perguntas": [
        {
          "q": "What happens when Mia practices more?",
          "op": [
            "She gets better",
            "She gets tired",
            "She gets lost"
          ],
          "a": 0,
          "por": "The more I practice, the better I get."
        },
        {
          "q": "Why does Mia get up at five?",
          "op": [
            "To have more time",
            "Because the hall opens at five",
            "Because she can't sleep"
          ],
          "a": 0,
          "por": "The earlier I wake up, the more time I have."
        },
        {
          "q": "What does Leo say about a higher rank?",
          "op": [
            "The work gets heavier",
            "The pay gets lower",
            "The map gets smaller"
          ],
          "a": 0,
          "por": "The higher the rank, the heavier the work."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about getting better. Hear it, then say it.",
      "frases": [
        {
          "t": "The more I practice, the better I get.",
          "img": "https://wolf-labs.pages.dev/p/55c8e25f5ff7/the-more-i-fight/img/live-teto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The harder I study the map, the easier it gets.",
          "img": "https://wolf-labs.pages.dev/p/55c8e25f5ff7/the-more-i-fight/img/live-mapa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The sooner we start, the sooner we finish.",
          "img": "https://wolf-labs.pages.dev/p/55c8e25f5ff7/the-more-i-fight/img/live-portal.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The more..., the more... Four quick ones.",
      "regra": "<b>The + comparative, the + comparative</b> · <b>the earlier</b> (not the more early) · <b>better and better</b> (not more and more good).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The harder we work, the better we feel.",
          "aceita": [],
          "d": "Hint: <b>the harder</b> opens the idea, <b>the better</b> gives the result."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The more I practice, the best I get.",
          "r": "The more I practice, the better I get.",
          "aceita": [],
          "d": "Hint: two things are changing together, so use the comparative: <b>better</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The more early you wake up, the more time you have.",
          "r": "The earlier you wake up, the more time you have.",
          "aceita": [],
          "d": "Hint: <i>early</i> is a short adjective: <b>earlier</b>, not <i>more early</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "My English is getting more and more good.",
          "r": "My English is getting better and better.",
          "aceita": [],
          "d": "Hint: the comparative of <i>good</i> is <b>better</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/55c8e25f5ff7/the-more-i-fight/img/live-teto.webp",
      "leg": "A rainy city at night",
      "pede": "Look at the picture: a rainy city at night. Write 2 or 3 sentences about something you are learning. Use <b>the more …, the more …</b> or <b>better and better</b>.",
      "ph": "The more I …, the … I get.",
      "ex": "The more I practice English, the more confident I feel. The earlier I start, the more I finish. My cooking is getting better and better."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you getting better at? How?",
          "ph": "I'm getting better at … The more I …",
          "ex": "I'm getting better at drawing. The more I draw, the faster I get."
        },
        {
          "q": "What gets easier the more you do it?",
          "ph": "The more I …, the easier …",
          "ex": "The more I run, the easier it gets."
        }
      ]
    }
  }
};
