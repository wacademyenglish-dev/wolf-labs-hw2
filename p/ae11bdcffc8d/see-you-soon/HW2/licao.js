/* SEE YOU SOON · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: too / enough + going to x will. A2: dicas em portugues so nas notas (d). Imagens: live-capa (escura). */
window.HW2 = {
  "id": "see-you-soon",
  "titulo": "See You Soon",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ae11bdcffc8d/see-you-soon/img/live-capa.webp",
  "alvo": "too / enough (too cold to swim; warm enough; enough time) + going to for a plan already made x will for a decision right now; never too much + adjective, never enough before an adjective",
  "abrir": "Do you have enough time for a coffee today?",
  "fecho": "<b>too</b> + adjective = more than you want: <i>It's too cold to swim.</i> <b>Adjective + enough</b>: <i>warm enough</i>. <b>enough</b> + noun: <i>enough time</i>. A plan already made: <b>going to</b> (<i>I'm going to visit you in May.</i>). A decision right now: <b>I'll</b> (<i>I'll send you the photos.</i>).",
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
      "sub": "Mia and Leo say a happy goodbye at the station. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ae11bdcffc8d/see-you-soon/img/live-capa.webp",
      "leg": "A street in Glasgow at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Is your train soon, Mia? We have enough time for one more coffee."
        },
        {
          "quem": "mia",
          "t": "Yes, ten minutes is enough. The café is close enough to the station."
        },
        {
          "quem": "leo",
          "t": "Good. Don't be sad. It's too early to say goodbye!"
        },
        {
          "quem": "mia",
          "t": "You're right. I'm going to visit you in May. I already have the tickets."
        },
        {
          "quem": "leo",
          "t": "Great! I'm going to show you the old castle. It's too cold now, but in May it's warm enough to walk."
        },
        {
          "quem": "mia",
          "t": "Oh no, I forgot my phone charger at your flat!"
        },
        {
          "quem": "leo",
          "t": "Don't worry. I'll send it to you tomorrow."
        },
        {
          "quem": "mia",
          "t": "Thanks! And I'll send you the photos tonight."
        },
        {
          "quem": "leo",
          "t": "Perfect. See you soon, Mia!"
        },
        {
          "quem": "mia",
          "t": "See you soon! Keep in touch!"
        }
      ],
      "perguntas": [
        {
          "q": "Why do they have time for a coffee?",
          "op": [
            "Ten minutes is enough",
            "The train is late",
            "The café is too far"
          ],
          "a": 0,
          "por": "Yes, ten minutes is enough. The café is close enough to the station."
        },
        {
          "q": "What is Mia going to do in May?",
          "op": [
            "Visit Leo",
            "Send the photos",
            "Buy a new charger"
          ],
          "a": 0,
          "por": "I'm going to visit you in May. I already have the tickets."
        },
        {
          "q": "What will Leo do about the charger?",
          "op": [
            "Send it tomorrow",
            "Bring it to the train",
            "Buy a new one"
          ],
          "a": 0,
          "por": "I'll send it to you tomorrow."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a last day. Hear it, then say it.",
      "frases": [
        {
          "t": "It's too cold to sit outside today.",
          "img": "https://wolf-labs.pages.dev/p/ae11bdcffc8d/see-you-soon/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We have enough time for one more coffee.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm going to visit you in May.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "too, enough, going to. Four quick ones.",
      "regra": "<b>too</b> + adjective · <b>adjective + enough</b> · <b>enough</b> + noun · <b>going to</b> (plan) · <b>I'll</b> (decision now).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We have enough time for a walk.",
          "aceita": [],
          "d": "Dica: <b>enough</b> vem antes do substantivo: <i>enough time</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It's too much expensive for me.",
          "r": "It's too expensive for me.",
          "aceita": [
            "It is too expensive for me."
          ],
          "d": "Dica: <b>too</b> + adjetivo, sem 'much': <i>too expensive</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is in the wrong place.",
          "mostra": "The room is enough warm.",
          "r": "The room is warm enough.",
          "aceita": [],
          "d": "Dica: depois do adjetivo, o <b>enough</b> vem em segundo: <i>warm enough</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the plan is already made.",
          "mostra": "I have tickets! I will visit you.",
          "r": "I have tickets! I'm going to visit you.",
          "aceita": [
            "I have tickets! I am going to visit you."
          ],
          "d": "Dica: o plano já está pronto (você tem os bilhetes), então <b>going to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ae11bdcffc8d/see-you-soon/img/live-capa.webp",
      "leg": "A wet street at night",
      "pede": "Look at the picture: a wet street on your last evening in a city. Write 2 or 3 sentences about it. Use <b>too</b>, <b>enough</b> and <b>I'm going to</b>.",
      "ph": "It's too … to … I'm going to …",
      "ex": "It's too cold to walk outside, but we have enough time for one coffee. I'm going to visit you in May."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is it warm enough where you live today? What are you going to do?",
          "ph": "It's warm enough today. I'm going to …",
          "ex": "It's warm enough today. I'm going to walk with my dog."
        },
        {
          "q": "Who are you going to see or call soon? When?",
          "ph": "I'm going to … on …",
          "ex": "I'm going to call my sister on Sunday."
        }
      ]
    }
  }
};
