/* THIRTY NIGHTS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: modais de dedução: must be / might be / can't be. B1: nenhum português. Jogo: mistério leve numa vila, sem horror. Só imagens live-* (lum < 50). */
window.HW2 = {
  "id": "thirty-nights",
  "titulo": "Thirty Nights",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/978a2c2a0463/thirty-nights/img/live-market.webp",
  "alvo": "modals of deduction: must be (almost sure) · might / could be (maybe) · can't be (sure it is not); plain verb after a modal, no to, no -s; never mustn't be for impossible",
  "abrir": "Your phone rings and the number is new. Who might it be?",
  "fecho": "<b>must be</b> = almost sure. <b>might be / could be</b> = maybe. <b>can't be</b> = sure it is not. After a modal, the plain verb: <i>She must be tired</i>, never <i>must to be</i>. For impossible, use <b>can't be</b>, not <i>mustn't be</i>.",
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
      "sub": "Mia and Leo see a light in the old chapel at midnight. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/978a2c2a0463/thirty-nights/img/live-chapel.webp",
      "leg": "The chapel, lit by candles",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the chapel window. There's a light on at midnight."
        },
        {
          "quem": "mia",
          "t": "It must be the priest. He lives next door."
        },
        {
          "quem": "leo",
          "t": "It can't be the priest. He's away until Sunday."
        },
        {
          "quem": "mia",
          "t": "Then it might be the baker. She always gets up early."
        },
        {
          "quem": "leo",
          "t": "Maybe. Or it could be a traveler who needs a place to sleep."
        },
        {
          "quem": "mia",
          "t": "That must be it. Look, there are muddy boots by the door."
        },
        {
          "quem": "leo",
          "t": "They can't be the baker's. Her boots are red."
        },
        {
          "quem": "mia",
          "t": "So it must be a stranger. He might still be inside."
        },
        {
          "quem": "leo",
          "t": "Let's knock. It might be somebody who needs help."
        },
        {
          "quem": "mia",
          "t": "Good idea. He could be hungry, too. I'll take some bread."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it be the priest?",
          "op": [
            "He's away until Sunday",
            "He lives far away",
            "He is asleep next door"
          ],
          "a": 0,
          "por": "It can't be the priest. He's away until Sunday."
        },
        {
          "q": "Why can't the boots be the baker's?",
          "op": [
            "Her boots are red",
            "She is at the market",
            "She hates mud"
          ],
          "a": 0,
          "por": "They can't be the baker's. Her boots are red."
        },
        {
          "q": "Who does Mia think it must be?",
          "op": [
            "A stranger",
            "The baker",
            "The priest"
          ],
          "a": 0,
          "por": "So it must be a stranger."
        }
      ]
    },
    "out": {
      "sub": "Three guesses about the village. Hear it, then say it.",
      "frases": [
        {
          "t": "It must be the baker, because she gets up early.",
          "img": "https://wolf-labs.pages.dev/p/978a2c2a0463/thirty-nights/img/live-market.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It can't be the priest, because he is away.",
          "img": "https://wolf-labs.pages.dev/p/978a2c2a0463/thirty-nights/img/live-chapel.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There is a light in the castle. It could be a traveler.",
          "img": "https://wolf-labs.pages.dev/p/978a2c2a0463/thirty-nights/img/live-castle.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Must be, might be or can't be? Four quick ones.",
      "regra": "<b>must be</b> = almost sure · <b>might / could be</b> = maybe · <b>can't be</b> = sure it is not · no <i>to</i> after a modal.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He must be a traveler from the north.",
          "aceita": [],
          "d": "Hint: <b>must be</b> + a noun: you are almost sure."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It must to be the baker.",
          "r": "It must be the baker.",
          "aceita": [],
          "d": "Hint: after <b>must</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It mustn't be the priest. He is away.",
          "r": "It can't be the priest. He is away.",
          "aceita": [],
          "d": "Hint: when you are sure it is not true, use <b>can't be</b>. <i>Mustn't</i> is for rules."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She might is at the market.",
          "r": "She might be at the market.",
          "aceita": [],
          "d": "Hint: after <b>might</b>, the plain verb: <i>be</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/978a2c2a0463/thirty-nights/img/live-forest.webp",
      "leg": "A foggy path with a small hut",
      "pede": "Look at the picture: a foggy path with a small hut and a warm light. Write 2 or 3 guesses about who lives there. Use <b>must be</b>, <b>might be</b> or <b>can't be</b>.",
      "ph": "It must be … It can't be …",
      "ex": "It must be a farmer, because the light is warm. It might be a family. It can't be a hotel, because the hut is too small."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your phone rings and the number is new. Who might it be?",
          "ph": "It might be … It can't be …",
          "ex": "It might be my bank. It can't be my mother, because I know her number."
        },
        {
          "q": "A friend isn't answering your messages. Where might he or she be?",
          "ph": "She must be … She might be …",
          "ex": "She must be at work. She might be on the bus, or her phone could be off."
        }
      ]
    }
  }
};
