/* SIXTY SECONDS TO SELL IT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: modais will / could / would / can + verbo simples. B1: nenhum português. */
window.HW2 = {
  "id": "sixty-seconds-to-sell-it",
  "titulo": "Sixty Seconds to Sell It",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/18fa1f1c51ea/sixty-seconds-to-sell-it/img/live-cadeiras.webp",
  "alvo": "modals for benefits: will (sure), could (possible), would (if you buy), can (possible now); always the plain verb after a modal (no -s, no to); let / help + person + plain verb",
  "abrir": "What do you buy because someone convinced you?",
  "fecho": "Every benefit is a promise. <b>will</b> = sure: <i>It will save time.</i> <b>could</b> = possible: <i>It could help sales.</i> <b>would</b> = if you buy: <i>It would let you swap shifts.</i> <b>can</b> = possible now. After a modal, the plain verb: no <i>-s</i>, no <i>to</i>. <b>let / help + person + plain verb</b>: <i>It helps you save time.</i>",
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
      "sub": "Mia pitches an app to Leo, an investor. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/18fa1f1c51ea/sixty-seconds-to-sell-it/img/live-cadeiras.webp",
      "leg": "Empty chairs on a dark stage",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "I'm Maya, and my app is ShiftMate. It will save every restaurant five hours a week."
        },
        {
          "quem": "leo",
          "t": "Five hours? That's a big promise."
        },
        {
          "quem": "mia",
          "t": "It is. We measured it in forty restaurants. Managers can plan the whole week in ten minutes."
        },
        {
          "quem": "leo",
          "t": "And what would a manager do with those hours?"
        },
        {
          "quem": "mia",
          "t": "They could train new staff, or they could simply go home on time."
        },
        {
          "quem": "leo",
          "t": "Could sales go up too?"
        },
        {
          "quem": "mia",
          "t": "Maybe. In three restaurants, sales went up eight percent, so it could help. I can't promise it will double sales."
        },
        {
          "quem": "leo",
          "t": "I like that honest answer. Would it let staff swap shifts?"
        },
        {
          "quem": "mia",
          "t": "Yes. It would let them swap shifts from the phone, and it would help managers say yes quickly."
        }
      ],
      "perguntas": [
        {
          "q": "What will the app save?",
          "op": [
            "Five hours a week",
            "Eight percent",
            "Forty restaurants"
          ],
          "a": 0,
          "por": "It will save every restaurant five hours a week."
        },
        {
          "q": "Why does Maya say sales could go up?",
          "op": [
            "Sales went up in only three restaurants",
            "Sales doubled everywhere",
            "The investor asked for it"
          ],
          "a": 0,
          "por": "In three restaurants, sales went up eight percent, so it could help."
        },
        {
          "q": "What would the app let staff do?",
          "op": [
            "Swap shifts from the phone",
            "Plan the whole week",
            "Hire new staff"
          ],
          "a": 0,
          "por": "It would let them swap shifts from the phone."
        }
      ]
    },
    "out": {
      "sub": "Three promises of different sizes. Hear it, then say it.",
      "frases": [
        {
          "t": "It will save every restaurant five hours a week.",
          "img": "https://wolf-labs.pages.dev/p/18fa1f1c51ea/sixty-seconds-to-sell-it/img/live-cadeiras.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It could help your sales, but I can't promise more.",
          "img": "https://wolf-labs.pages.dev/p/18fa1f1c51ea/sixty-seconds-to-sell-it/img/live-escritorio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It would let your staff swap shifts from the phone.",
          "img": "https://wolf-labs.pages.dev/p/18fa1f1c51ea/sixty-seconds-to-sell-it/img/live-restaurante.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will, could, would or can? Four quick ones.",
      "regra": "<b>will</b> = sure · <b>could</b> = possible · <b>would</b> = if you buy · plain verb after a modal · <b>let / help + person + plain verb</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It will save every restaurant five hours.",
          "aceita": [],
          "d": "Hint: <b>will</b> + plain verb: <i>will save</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "It will saves you five hours a week.",
          "r": "It will save you five hours a week.",
          "aceita": [],
          "d": "Hint: after <b>will</b>, the verb has no <i>-s</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "It can help you saving time.",
          "r": "It can help you save time.",
          "aceita": [],
          "d": "Hint: <b>help you</b> + plain verb: <i>save</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It would let you to swap shifts.",
          "r": "It would let you swap shifts.",
          "aceita": [],
          "d": "Hint: after <b>let you</b>, the verb has no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/18fa1f1c51ea/sixty-seconds-to-sell-it/img/live-restaurante.webp",
      "leg": "A restaurant kitchen after closing",
      "pede": "Look at the picture: a restaurant kitchen after closing. Write 2 or 3 sentences to sell an app or a product that helps this kitchen. Use <b>will</b> for what you are sure about and <b>could</b> for what is only possible.",
      "ph": "It will … and it could …",
      "ex": "It will save the cook an hour every day. It could help the team plan the week. It would let them order food from the phone."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What product do you use every day? Sell it to me in two sentences.",
          "ph": "It will … It could …",
          "ex": "My phone will wake me up every morning. It could also help you learn English."
        },
        {
          "q": "What would you do with five extra hours a week?",
          "ph": "I would …",
          "ex": "I would exercise, and I would cook at home."
        }
      ]
    }
  }
};
