/* SOMETHING MIGHT BE IN THE HOUSE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: might / may + plain verb for a guess about now. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "something-might",
  "titulo": "Something Might Be in the House",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b44c41666b9b/something-might/img/live-lanterna.webp",
  "alvo": "might / may + plain verb for a guess about now; might not / may not; no can for guesses, no -s, no to, no don't",
  "abrir": "What noises do you hear in your house at night?",
  "fecho": "A guess about now: <b>might / may</b> + plain verb: <i>It might be the cat. It may not be a ghost.</i> No <i>can</i>, no <i>-s</i>, no <i>to</i>, no <i>don't</i>.",
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
      "sub": "Mia hears noises when the power goes out. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b44c41666b9b/something-might/img/live-escada.webp",
      "leg": "A dark staircase, a small lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the power is out. I hear a noise in the kitchen."
        },
        {
          "quem": "leo",
          "t": "Don't worry. It might be the tap."
        },
        {
          "quem": "mia",
          "t": "Maybe. Or it may be the cat."
        },
        {
          "quem": "leo",
          "t": "Is your cat inside?"
        },
        {
          "quem": "mia",
          "t": "I don't know. She might be under the bed."
        },
        {
          "quem": "leo",
          "t": "Now listen. Is there another noise?"
        },
        {
          "quem": "mia",
          "t": "Yes, upstairs. It might not be a ghost, right?"
        },
        {
          "quem": "leo",
          "t": "Of course not. It may be your grandpa. He might want a glass of milk."
        },
        {
          "quem": "mia",
          "t": "Ha! You're right. I'm going to find my flashlight."
        }
      ],
      "perguntas": [
        {
          "q": "What might the noise in the kitchen be?",
          "op": [
            "The tap",
            "The wind",
            "A ghost"
          ],
          "a": 0,
          "por": "It might be the tap."
        },
        {
          "q": "Where might the cat be?",
          "op": [
            "Under the bed",
            "In the kitchen",
            "Outside"
          ],
          "a": 0,
          "por": "She might be under the bed."
        },
        {
          "q": "Who may be upstairs?",
          "op": [
            "Her grandpa",
            "A ghost",
            "Her cat"
          ],
          "a": 0,
          "por": "It may be your grandpa."
        }
      ]
    },
    "out": {
      "sub": "Three guesses. Hear it, then say it.",
      "frases": [
        {
          "t": "It might be the cat.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/b44c41666b9b/something-might/img/live-cozinha.webp"
        },
        {
          "t": "It may rain tonight.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/b44c41666b9b/something-might/img/live-janela.webp"
        },
        {
          "t": "It might not be a ghost.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/b44c41666b9b/something-might/img/live-escada.webp"
        }
      ]
    },
    "focus": {
      "sub": "Guess or mistake? Four quick ones.",
      "regra": "<b>might / may</b> + plain verb · <b>might not / may not</b> · never <b>can</b> for a guess, never <b>-s</b>, <b>to</b> or <b>don't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It might be the wind outside.",
          "aceita": [],
          "d": "Dica: palpite: <b>It might be</b> + o que você acha."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: can is not for guesses.",
          "mostra": "It can be the cat.",
          "r": "It might be the cat.",
          "aceita": [
            "It may be the cat."
          ],
          "d": "Dica: para palpite use <b>might</b> ou <b>may</b>, não <b>can</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: might never gets -s.",
          "mostra": "It mights be the tap.",
          "r": "It might be the tap.",
          "aceita": [
            "It may be the tap."
          ],
          "d": "Dica: <b>might</b> não muda: sem <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the negative of might.",
          "mostra": "It might don't be a ghost.",
          "r": "It might not be a ghost.",
          "aceita": [
            "It may not be a ghost."
          ],
          "d": "Dica: o negativo é <b>might not</b>, sem <b>don't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b44c41666b9b/something-might/img/live-lanterna.webp",
      "leg": "A flashlight on the floor",
      "pede": "Look at the picture: a flashlight in a dark room. Write 2 or 3 guesses about what is there: one with <b>might</b>, one with <b>may</b> and one with <b>might not</b>.",
      "ph": "It might be …",
      "ex": "It might be a box. It may be a bag. It might not be a person."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What noises do you hear in your house at night? What might they be?",
          "ph": "I hear … It might be …",
          "ex": "I hear a small noise in the kitchen. It might be the fridge."
        },
        {
          "q": "Your friend says: 'I hear a noise outside.' What do you guess?",
          "ph": "It might be …",
          "ex": "It might be the wind. It might not be a person."
        }
      ]
    }
  }
};
