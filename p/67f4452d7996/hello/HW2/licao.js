/* HELLO · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past deduction: must / can't / might have. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "hello",
  "titulo": "Hello",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/67f4452d7996/hello/img/live-secretaria.webp",
  "alvo": "past deduction: must have + past participle (almost sure), can't / couldn't have (impossible), might / could have (maybe); never mustn't have for a guess, never must have + past simple (must have went), never must be for the past",
  "abrir": "Think of someone from school you lost touch with. Where might they be now?",
  "fecho": "Guessing about the past: <b>must have</b> + past participle = almost sure (<i>someone must have brought it</i>); <b>can't have</b> = impossible (<i>it can't have come by post</i>); <b>might / could have</b> = maybe. For a negative guess, <b>can't have</b>, not <i>mustn't have</i>. And the participle: <i>must have gone</i>, never <i>must have went</i>.",
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
      "sub": "Mia finds a parcel at her door with no name on it. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/67f4452d7996/hello/img/live-apartamento.webp",
      "leg": "Mia's living room in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look. Someone left a parcel at my door this morning, but there's no name on it."
        },
        {
          "quem": "leo",
          "t": "It can't have come by post. There's no stamp."
        },
        {
          "quem": "mia",
          "t": "You're right. Someone must have brought it here by hand."
        },
        {
          "quem": "leo",
          "t": "What's inside?"
        },
        {
          "quem": "mia",
          "t": "Maple syrup and a postcard from Toronto."
        },
        {
          "quem": "leo",
          "t": "Toronto? Then it must have come from Julia. She moved there after school, didn't she?"
        },
        {
          "quem": "mia",
          "t": "Yes, but she lives in Canada. She can't have left it here herself."
        },
        {
          "quem": "leo",
          "t": "She might have asked her brother. He still lives in the next street."
        },
        {
          "quem": "mia",
          "t": "Or she could have flown home for the holidays! She might be in town right now."
        },
        {
          "quem": "leo",
          "t": "Then call her and find out. You haven't talked in years."
        },
        {
          "quem": "mia",
          "t": "I'm calling her now. She must have kept my old address all this time."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't the parcel have come by post?",
          "op": [
            "There's no stamp",
            "It's too big",
            "It came on a Sunday"
          ],
          "a": 0,
          "por": "It can't have come by post. There's no stamp."
        },
        {
          "q": "Who might have brought the parcel?",
          "op": [
            "Julia's brother",
            "The postman",
            "Leo"
          ],
          "a": 0,
          "por": "She might have asked her brother."
        },
        {
          "q": "Where did Julia move after school?",
          "op": [
            "Toronto",
            "London",
            "Lisbon"
          ],
          "a": 0,
          "por": "Toronto? Then it must have come from Julia. She moved there after school."
        }
      ]
    },
    "out": {
      "sub": "Three guesses about the parcel. Hear it, then say it.",
      "frases": [
        {
          "t": "Someone must have left this parcel at my door.",
          "img": "https://wolf-labs.pages.dev/p/67f4452d7996/hello/img/live-apartamento.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It can't have come by post, because there's no stamp.",
          "img": "https://wolf-labs.pages.dev/p/67f4452d7996/hello/img/live-secretaria.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She might have flown home for the holidays.",
          "img": "https://wolf-labs.pages.dev/p/67f4452d7996/hello/img/live-plataforma.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must have, can't have, might have. Four quick ones.",
      "regra": "<b>must have</b> + participle = almost sure · <b>can't have</b> = impossible · <b>might / could have</b> = maybe · always <b>have</b> + participle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She must have kept my old address.",
          "aceita": [],
          "d": "Hint: <b>must have</b> + past participle: <i>kept</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He must have went to the station.",
          "r": "He must have gone to the station.",
          "aceita": [],
          "d": "Hint: after <b>have</b>, the past participle: <i>gone</i>, not <i>went</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She mustn't have seen my message.",
          "r": "She can't have seen my message.",
          "aceita": [
            "She couldn't have seen my message."
          ],
          "d": "Hint: a negative guess about the past is <b>can't have</b>, not <i>mustn't have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He must be at home last night.",
          "r": "He must have been at home last night.",
          "aceita": [],
          "d": "Hint: for the past, <b>must have been</b>. <i>Must be</i> is for now."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/67f4452d7996/hello/img/live-plataforma.webp",
      "leg": "A train station at night",
      "pede": "Look at the picture: a station platform at night, a train waiting, the ground still wet. Write 2 or 3 guesses about what happened there today. Use <b>must have</b>, <b>can't have</b> or <b>might have</b>.",
      "ph": "It must have … The passengers might have …",
      "ex": "It must have rained a lot, because the platform is wet. The passengers might have gone home early. It can't have been very late, because the lights are still on."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of an old school friend you haven't seen in years. What do you think they have done since then?",
          "ph": "… must have … / might have …",
          "ex": "My friend Rafa might have moved to Portugal. He must have finished his engineering degree by now."
        },
        {
          "q": "The last time you couldn't find something at home, what had happened to it?",
          "ph": "I must have … / Someone might have …",
          "ex": "My keys weren't in my bag. I must have left them in the car, or my sister might have taken them."
        }
      ]
    }
  }
};
