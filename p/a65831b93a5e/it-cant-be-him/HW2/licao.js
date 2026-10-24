/* IT CAN'T BE HIM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: dedução: must / might / can't be. B1: nenhum português. Sem polícia, sem crime: um cartão misterioso no escritório. Falas originais. */
window.HW2 = {
  "id": "it-cant-be-him",
  "titulo": "It Can't Be Him",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a65831b93a5e/it-cant-be-him/img/live-capa.webp",
  "alvo": "deduction: must be (sure it is), might / may / could be (maybe), can't be (sure it isn't); plain verb after the modal, no to; never mustn't for can't, never can be for maybe",
  "abrir": "Your phone rings at night and the number is new. Who could it be?",
  "fecho": "<b>must be</b> = I am sure it is. <b>might / may / could be</b> = maybe. <b>can't be</b> = I am sure it isn't. After them, the plain verb, no <i>to</i>: <i>It must be Rui.</i> Never <i>mustn't be</i> for a guess: use <b>can't be</b>.",
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
      "sub": "Mia and Leo find a strange card on a rainy night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a65831b93a5e/it-cant-be-him/img/live-mesa.webp",
      "leg": "Cards on a dark table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this card on the table. It has a green question mark."
        },
        {
          "quem": "mia",
          "t": "It must be a game. Somebody left it here for us."
        },
        {
          "quem": "leo",
          "t": "Or it might be a message. There is a letter on the back: R."
        },
        {
          "quem": "mia",
          "t": "R? It could be Rita from the office."
        },
        {
          "quem": "leo",
          "t": "No, it can't be Rita. She is on holiday this week."
        },
        {
          "quem": "mia",
          "t": "Then it must be Rui. He always leaves puzzles on desks."
        },
        {
          "quem": "leo",
          "t": "I hear steps in the hall. Who is it?"
        },
        {
          "quem": "mia",
          "t": "It can't be the boss. He never works at night. It might be the cleaner."
        },
        {
          "quem": "leo",
          "t": "Look, the light is green. It must be Rui, with his puzzle!"
        },
        {
          "quem": "mia",
          "t": "I think you're right."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it be Rita?",
          "op": [
            "She is on holiday this week",
            "She is at the door",
            "She hates puzzles"
          ],
          "a": 0,
          "por": "No, it can't be Rita. She is on holiday this week."
        },
        {
          "q": "Who always leaves puzzles on desks?",
          "op": [
            "Rui",
            "The boss",
            "The cleaner"
          ],
          "a": 0,
          "por": "It must be Rui. He always leaves puzzles on desks."
        },
        {
          "q": "Who might be in the hall at night?",
          "op": [
            "The cleaner",
            "The boss",
            "Rita"
          ],
          "a": 0,
          "por": "It can't be the boss. It might be the cleaner."
        }
      ]
    },
    "out": {
      "sub": "Three guesses about a strange card. Hear it, then say it.",
      "frases": [
        {
          "t": "It must be a game.",
          "img": "https://wolf-labs.pages.dev/p/a65831b93a5e/it-cant-be-him/img/live-cartao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It can't be Rita. She is on holiday.",
          "img": "https://wolf-labs.pages.dev/p/a65831b93a5e/it-cant-be-him/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It might be the cleaner in the hall.",
          "img": "https://wolf-labs.pages.dev/p/a65831b93a5e/it-cant-be-him/img/live-salao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, might or can't? Four quick ones.",
      "regra": "<b>must be</b> = sure yes · <b>might / could be</b> = maybe · <b>can't be</b> = sure no · no <b>to</b> after them.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "That can't be the boss at night.",
          "aceita": [],
          "d": "Hint: <b>can't be</b> = I am sure it isn't."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it correct.",
          "mostra": "He maybe is at home.",
          "r": "He might be at home.",
          "aceita": [
            "Maybe he is at home.",
            "He may be at home.",
            "He could be at home."
          ],
          "d": "Hint: for maybe, use <b>might be</b> or put <i>maybe</i> first."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It mustn't be Rita because she is away.",
          "r": "It can't be Rita because she is away.",
          "aceita": [],
          "d": "Hint: when you are sure it is not, use <b>can't be</b>. <i>Mustn't</i> means not allowed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She must be at home, but I'm not sure.",
          "r": "She might be at home, but I'm not sure.",
          "aceita": [
            "She may be at home, but I'm not sure.",
            "She could be at home, but I'm not sure."
          ],
          "d": "Hint: if you are not sure, use <b>might</b>, not <i>must</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a65831b93a5e/it-cant-be-him/img/live-gotham.webp",
      "leg": "A city at night, red lights",
      "pede": "Look at the picture: a city at night with red lights. Write 2 or 3 sentences about what you see. How sure are you? Use <b>must be</b>, <b>might be</b> or <b>can't be</b>.",
      "ph": "That light must be …",
      "ex": "That tall building must be an office. The red light might be a sign. It can't be a house."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your phone rings and the number is new. Who might it be? Who can't it be?",
          "ph": "It might be … It can't be …",
          "ex": "It might be my cousin. It can't be my mother, she has a new number."
        },
        {
          "q": "A neighbor's light is on at midnight. What do you think? How sure are you?",
          "ph": "He must be … He might be …",
          "ex": "He must be awake. He might be watching a film."
        }
      ]
    }
  }
};
