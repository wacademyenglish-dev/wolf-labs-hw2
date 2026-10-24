/* YOU’D BETTER NOT VOLUNTEER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should, ought to, had better (not). B1: nenhum português. Só imagens live-* escuras. Falas originais, sem violência. */
window.HW2 = {
  "id": "youd-better-not-volunteer",
  "titulo": "You’d Better Not Volunteer",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5c4caddf844a/youd-better-not-volunteer/img/live-capitolio.webp",
  "alvo": "advice and warnings: should / shouldn't, ought to, had better (not) + plain verb; never should to, don't should, had better to",
  "abrir": "What advice do you often give your friends?",
  "fecho": "<b>should</b> / <b>shouldn't</b> = advice. <b>ought to</b> = advice, a bit more formal. <b>had better (not)</b> = a warning: something bad may happen. All of them take the plain verb: <i>You should wear a jacket. You'd better not be late.</i> Never <i>should to</i>, <i>don't should</i> or <i>had better to</i>.",
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
      "sub": "Leo helps Mia get ready for a big ceremony. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5c4caddf844a/youd-better-not-volunteer/img/live-capitolio.webp",
      "leg": "A grand building with red banners",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the ceremony starts at six. You'd better not be late."
        },
        {
          "quem": "mia",
          "t": "I know. What should I wear?"
        },
        {
          "quem": "leo",
          "t": "You should wear the grey jacket. And you ought to practice your speech once more."
        },
        {
          "quem": "mia",
          "t": "I've practiced it ten times. Should I smile?"
        },
        {
          "quem": "leo",
          "t": "Yes, you should. But you shouldn't smile too much. You'd better look natural."
        },
        {
          "quem": "mia",
          "t": "What else? Is there anything I shouldn't do?"
        },
        {
          "quem": "leo",
          "t": "You shouldn't argue with the guards, and you'd better not talk to strangers before the show."
        },
        {
          "quem": "mia",
          "t": "Understood. Anything about the cameras?"
        },
        {
          "quem": "leo",
          "t": "You should look straight at them, and you ought to speak slowly."
        }
      ],
      "perguntas": [
        {
          "q": "What time does the ceremony start?",
          "op": [
            "At six",
            "At eight",
            "At four"
          ],
          "a": 0,
          "por": "The ceremony starts at six."
        },
        {
          "q": "What should Mia wear?",
          "op": [
            "The grey jacket",
            "A red dress",
            "Her old boots"
          ],
          "a": 0,
          "por": "You should wear the grey jacket."
        },
        {
          "q": "What had Mia better not do before the show?",
          "op": [
            "Talk to strangers",
            "Practice her speech",
            "Look at the cameras"
          ],
          "a": 0,
          "por": "You'd better not talk to strangers before the show."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice. Hear it, then say it.",
      "frases": [
        {
          "t": "You'd better not be late for the ceremony.",
          "img": "https://wolf-labs.pages.dev/p/5c4caddf844a/youd-better-not-volunteer/img/live-capitolio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You'd better check the map before you leave.",
          "img": "https://wolf-labs.pages.dev/p/5c4caddf844a/youd-better-not-volunteer/img/live-mapa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You shouldn't walk into the tunnel alone.",
          "img": "https://wolf-labs.pages.dev/p/5c4caddf844a/youd-better-not-volunteer/img/live-mina.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should, ought to, had better. Four quick ones.",
      "regra": "<b>should / shouldn't</b> · <b>ought to</b> · <b>had better (not)</b> + plain verb · never <i>should to</i>, <i>don't should</i>, <i>had better to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should practice your speech once more.",
          "aceita": [],
          "d": "Hint: <b>should</b> + plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You should to wear a jacket.",
          "r": "You should wear a jacket.",
          "aceita": [],
          "d": "Hint: after <b>should</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You had better to leave now.",
          "r": "You had better leave now.",
          "aceita": [
            "You'd better leave now."
          ],
          "d": "Hint: <b>had better</b> + plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You don't should argue with the guards.",
          "r": "You shouldn't argue with the guards.",
          "aceita": [
            "You should not argue with the guards."
          ],
          "d": "Hint: the negative of <b>should</b> is <b>shouldn't</b>, not <i>don't should</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5c4caddf844a/youd-better-not-volunteer/img/live-mina.webp",
      "leg": "A small town at dusk",
      "pede": "Look at the picture: a small town at dusk. A friend is moving there. Write 2 or 3 pieces of advice. Use <b>should</b>, <b>ought to</b> or <b>had better (not)</b>.",
      "ph": "You should … You'd better not …",
      "ex": "You should visit the old market on Saturday. You'd better not go out without a coat. You ought to learn the bus times."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend starts a new job tomorrow. What advice do you give?",
          "ph": "You should … You'd better not …",
          "ex": "You should arrive early. You'd better not check your phone too much."
        },
        {
          "q": "What do you think you ought to do more often?",
          "ph": "I ought to … I should …",
          "ex": "I ought to exercise more. I should sleep earlier."
        }
      ]
    }
  }
};
