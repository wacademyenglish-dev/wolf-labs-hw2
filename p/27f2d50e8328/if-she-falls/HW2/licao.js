/* IF SHE FALLS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: time clauses (when / as soon as / until + present). Jogo: falas originais, sem violência. B1: nenhum português. */
window.HW2 = {
  "id": "if-she-falls",
  "titulo": "If She Falls",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/27f2d50e8328/if-she-falls/img/live-roof.webp",
  "alvo": "time clauses about the future: when / as soon as / until / before / after + present simple, and will in the other half (As soon as the lights go out, I'll turn on the lanterns); never will in the time half",
  "abrir": "What will you do as soon as you get home tonight?",
  "fecho": "In a time clause about the future, use the <b>present</b>: <i>When we reach the square, we'll stop.</i> <i>I won't leave until everybody is inside.</i> <b>Will</b> goes in the other half. Never <i>when we will reach</i>.",
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
      "sub": "Mia and Leo plan a night in the city. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/27f2d50e8328/if-she-falls/img/live-park.webp",
      "leg": "A snowy park at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the power in the city goes out at midnight. Are you ready?"
        },
        {
          "quem": "leo",
          "t": "Almost. As soon as the lights go out, I'll turn on the lanterns."
        },
        {
          "quem": "mia",
          "t": "Good. When the crowd reaches the square, will you guide them?"
        },
        {
          "quem": "leo",
          "t": "Yes. I'll wait until everyone is inside before I close the gate."
        },
        {
          "quem": "mia",
          "t": "What if somebody is late?"
        },
        {
          "quem": "leo",
          "t": "If somebody is late, I'll stay at the gate. I won't leave until they arrive."
        },
        {
          "quem": "mia",
          "t": "After we finish, we'll all drink something hot."
        },
        {
          "quem": "leo",
          "t": "Before it gets too cold, I'll bring the blankets."
        },
        {
          "quem": "mia",
          "t": "When the lights come back, we'll turn off the lanterns."
        },
        {
          "quem": "leo",
          "t": "And as soon as the morning comes, we'll all go home."
        }
      ],
      "perguntas": [
        {
          "q": "What will Leo do as soon as the lights go out?",
          "op": [
            "Turn on the lanterns",
            "Close the gate",
            "Bring the blankets"
          ],
          "a": 0,
          "por": "As soon as the lights go out, I'll turn on the lanterns."
        },
        {
          "q": "How long will Leo stay at the gate?",
          "op": [
            "Until everybody arrives",
            "Until midnight",
            "Until the lanterns go out"
          ],
          "a": 0,
          "por": "I won't leave until they arrive."
        },
        {
          "q": "What will they do when the lights come back?",
          "op": [
            "Turn off the lanterns",
            "Close the gate",
            "Drink something hot"
          ],
          "a": 0,
          "por": "When the lights come back, we'll turn off the lanterns."
        }
      ]
    },
    "out": {
      "sub": "Three plans for tonight. Hear it, then say it.",
      "frases": [
        {
          "t": "As soon as the lights go out, I'll turn on the lanterns.",
          "img": "https://wolf-labs.pages.dev/p/27f2d50e8328/if-she-falls/img/live-city.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I won't leave until everybody is inside.",
          "img": "https://wolf-labs.pages.dev/p/27f2d50e8328/if-she-falls/img/live-march.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Before it gets cold, we'll bring the blankets.",
          "img": "https://wolf-labs.pages.dev/p/27f2d50e8328/if-she-falls/img/live-park.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Present in the time half, will in the other. Four quick ones.",
      "regra": "<b>when / as soon as / until / before / after</b> + present · <b>will</b> in the other half · never <b>will</b> after the time word.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "When we reach the square, we will stop.",
          "aceita": [],
          "d": "Hint: the time half uses the present (<i>reach</i>); <b>will</b> goes in the other half."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "As soon as the lights will go out, I'll help you.",
          "r": "As soon as the lights go out, I'll help you.",
          "aceita": [],
          "d": "Hint: after <b>as soon as</b>, use the present: <i>go out</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I won't leave until she will arrive.",
          "r": "I won't leave until she arrives.",
          "aceita": [
            "I won't leave until she gets here."
          ],
          "d": "Hint: after <b>until</b>, use the present: <i>arrives</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "After we'll finish, we'll go home.",
          "r": "After we finish, we'll go home.",
          "aceita": [],
          "d": "Hint: after <b>after</b>, use the present: <i>finish</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/27f2d50e8328/if-she-falls/img/live-roof.webp",
      "leg": "A balcony above the city at night",
      "pede": "Look at the picture: a balcony above the city at night. Write 2 or 3 sentences about your plans for tonight or tomorrow. Use <b>when</b>, <b>as soon as</b>, <b>until</b> or <b>before</b> + present, and <b>will</b>.",
      "ph": "As soon as I get home, I will …",
      "ex": "As soon as I get home, I'll make dinner. I won't watch TV until I finish my homework. Before I go to bed, I'll call my sister."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do as soon as you finish work or class today?",
          "ph": "As soon as I finish, I will …",
          "ex": "As soon as I finish, I'll go for a walk."
        },
        {
          "q": "What will you do before you go to bed tonight?",
          "ph": "Before I go to bed, I will …",
          "ex": "Before I go to bed, I'll read a few pages and set my alarm."
        }
      ]
    }
  }
};
