/* BY THE TIME THEY WAKE UP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: future continuous x future perfect, by the time, by x until. B2: nenhum portugues. Jogo: falas originais, viagem pacifica, sem violencia. So imagens live-* escuras (<50). */
window.HW2 = {
  "id": "by-the-time-they-wake-up",
  "titulo": "By the Time They Wake Up",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b1165be5a9f4/by-the-time-they-wake-up/img/live-nassau.webp",
  "alvo": "future continuous (will be + -ing: in progress at a future time) and future perfect (will have + participle: finished before a future time); by the time + present simple, never will; by = no later than, until = up to that moment",
  "abrir": "What will you be doing this time tomorrow?",
  "fecho": "<b>At noon we will be sailing</b> = in progress at that time. <b>By sunset we will have arrived</b> = finished before that time. After <b>by the time</b>, the present: <i>By the time they wake up, we will have left.</i> <b>By</b> = no later than (<i>by Friday</i>). <b>Until</b> = up to that moment (<i>until Friday</i>).",
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
      "sub": "Mia and Leo in a harbor at night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b1165be5a9f4/by-the-time-they-wake-up/img/live-navio.webp",
      "leg": "The ship before the voyage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, it is ten at night. When are we leaving the harbor?"
        },
        {
          "quem": "leo",
          "t": "At four. By the time the town wakes up, we will have left Nassau."
        },
        {
          "quem": "mia",
          "t": "So at six we will be sailing past the reef."
        },
        {
          "quem": "leo",
          "t": "Yes. By six we will have passed the reef, and at noon we will be sailing along the coast."
        },
        {
          "quem": "mia",
          "t": "Will we have reached Havana by sunset?"
        },
        {
          "quem": "leo",
          "t": "No. We won't arrive until tomorrow morning."
        },
        {
          "quem": "mia",
          "t": "And the crew? They will be sleeping when we leave."
        },
        {
          "quem": "leo",
          "t": "Not all of them. The cook will be baking bread, and I will be checking the sails."
        },
        {
          "quem": "mia",
          "t": "Then I will have drawn the new chart by midnight."
        },
        {
          "quem": "leo",
          "t": "Good. Don't stay up until dawn. You need to rest."
        },
        {
          "quem": "mia",
          "t": "By this time tomorrow, we will be eating fresh fruit in Havana."
        },
        {
          "quem": "leo",
          "t": "I will drink to that."
        }
      ],
      "perguntas": [
        {
          "q": "What will have happened by the time the town wakes up?",
          "op": [
            "They will have left Nassau",
            "They will have reached Havana",
            "They will have drawn the chart"
          ],
          "a": 0,
          "por": "By the time the town wakes up, we will have left Nassau."
        },
        {
          "q": "What will the cook be doing when they leave?",
          "op": [
            "Baking bread",
            "Checking the sails",
            "Sleeping"
          ],
          "a": 0,
          "por": "The cook will be baking bread."
        },
        {
          "q": "What will Mia have done by midnight?",
          "op": [
            "Drawn the new chart",
            "Packed the cargo",
            "Reached Havana"
          ],
          "a": 0,
          "por": "I will have drawn the new chart by midnight."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the night voyage. Hear it, then say it.",
      "frases": [
        {
          "t": "By the time they wake up, we will have left.",
          "img": "https://wolf-labs.pages.dev/p/b1165be5a9f4/by-the-time-they-wake-up/img/live-nassau.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "At noon we will be sailing along the coast.",
          "img": "https://wolf-labs.pages.dev/p/b1165be5a9f4/by-the-time-they-wake-up/img/live-navio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I will finish the chart by midnight.",
          "img": "https://wolf-labs.pages.dev/p/b1165be5a9f4/by-the-time-they-wake-up/img/live-mapa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will be -ing, will have done, by and until. Four quick ones.",
      "regra": "<b>will be + -ing</b> = in progress · <b>will have + participle</b> = finished before · <b>by the time</b> + present · <b>by</b> = no later than.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "By sunrise we will have left the harbor.",
          "aceita": [],
          "d": "Hint: <b>by</b> + time + <b>will have</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "By the time he will wake, we will have left.",
          "r": "By the time he wakes, we will have left.",
          "aceita": [
            "By the time he wakes up, we will have left."
          ],
          "d": "Hint: after <b>by the time</b>, use the present, never <i>will</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "At noon we will be sail past the reef.",
          "r": "At noon we will be sailing past the reef.",
          "aceita": [
            "At noon we'll be sailing past the reef."
          ],
          "d": "Hint: <b>will be</b> + verb with <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will finish the chart until Friday.",
          "r": "I will finish the chart by Friday.",
          "aceita": [
            "I will have finished the chart by Friday."
          ],
          "d": "Hint: <b>by</b> = no later than. <b>Until</b> = up to that moment."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b1165be5a9f4/by-the-time-they-wake-up/img/live-varanda.webp",
      "leg": "A harbor at sunset",
      "pede": "Look at the picture: a harbor at sunset. Write 2 or 3 sentences about tomorrow. Use <b>will be + -ing</b> and <b>will have + participle</b>.",
      "ph": "At noon tomorrow I will be …",
      "ex": "At noon tomorrow I will be working. By six I will have finished my homework. By the time you wake up, I will have left."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you be doing this time tomorrow?",
          "ph": "This time tomorrow I will be …",
          "ex": "This time tomorrow I will be sitting in a meeting."
        },
        {
          "q": "What will you have finished by the end of this week?",
          "ph": "By Friday I will have …",
          "ex": "By Friday I will have finished my project."
        }
      ]
    }
  }
};
