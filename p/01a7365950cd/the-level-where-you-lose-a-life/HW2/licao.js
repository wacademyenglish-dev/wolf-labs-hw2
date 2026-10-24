/* THE LEVEL WHERE YOU LOSE A LIFE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: who / which / that / where. Filme: falas originais, sem violência. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-level-where-you-lose-a-life",
  "titulo": "The Level Where You Lose a Life",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/01a7365950cd/the-level-where-you-lose-a-life/img/live-capa.webp",
  "alvo": "who (a person), which / that (a thing), where (a place) to join two ideas: the friend who helps, the game that I like, the place where we play; no which for people, no where + extra preposition",
  "abrir": "Who is a person that makes you laugh?",
  "fecho": "<b>who</b> = a person: <i>the friend who helps you.</i> <b>which / that</b> = a thing: <i>the game that I like.</i> <b>where</b> = a place: <i>the level where you lose a life.</i> Not <i>which</i> for people.",
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
      "sub": "Mia plays a jungle video game. Leo helps from the sofa. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/01a7365950cd/the-level-where-you-lose-a-life/img/live-cartucho.webp",
      "leg": "A game on an old TV",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, this is the level where you lose a life. Be careful."
        },
        {
          "quem": "mia",
          "t": "Who is the character that I play?"
        },
        {
          "quem": "leo",
          "t": "You are the explorer who carries the green map."
        },
        {
          "quem": "mia",
          "t": "Which button opens the door?"
        },
        {
          "quem": "leo",
          "t": "The button which is next to the old tree."
        },
        {
          "quem": "mia",
          "t": "What is that? It's a vine that closes the path!"
        },
        {
          "quem": "leo",
          "t": "Jump over it. Where is the exit?"
        },
        {
          "quem": "mia",
          "t": "The exit is the place where the river turns left."
        },
        {
          "quem": "leo",
          "t": "Good. I see a boy who is waving. He is the friend who gives you a new life."
        },
        {
          "quem": "mia",
          "t": "Yes! Level two, here I come."
        }
      ],
      "perguntas": [
        {
          "q": "What kind of level is it?",
          "op": [
            "A level where you lose a life",
            "A level where you win a prize",
            "A level with no jungle"
          ],
          "a": 0,
          "por": "This is the level where you lose a life."
        },
        {
          "q": "Who is the character Mia plays?",
          "op": [
            "An explorer who carries a green map",
            "A boy who is waving",
            "A friend who gives a new life"
          ],
          "a": 0,
          "por": "You are the explorer who carries the green map."
        },
        {
          "q": "Who gives Mia a new life?",
          "op": [
            "A boy who is waving",
            "The old tree",
            "The vine"
          ],
          "a": 0,
          "por": "He is the friend who gives you a new life."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the game. Hear it, then say it.",
      "frases": [
        {
          "t": "This is the level where you lose a life.",
          "img": "https://wolf-labs.pages.dev/p/01a7365950cd/the-level-where-you-lose-a-life/img/live-cartucho.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He is the friend who gives you a new life.",
          "img": "https://wolf-labs.pages.dev/p/01a7365950cd/the-level-where-you-lose-a-life/img/live-tabuleiro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I see a vine that closes the path.",
          "img": "https://wolf-labs.pages.dev/p/01a7365950cd/the-level-where-you-lose-a-life/img/live-selva.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "who, which, that or where? Four quick ones.",
      "regra": "<b>who</b> = a person · <b>which / that</b> = a thing · <b>where</b> = a place.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This is the board that she found.",
          "aceita": [],
          "d": "Dica: coisa = <b>that</b> (ou which)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The man which plays the game is my friend.",
          "r": "The man who plays the game is my friend.",
          "aceita": [
            "The man that plays the game is my friend."
          ],
          "d": "Dica: pessoa = <b>who</b>, não which."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The game who I love is old.",
          "r": "The game that I love is old.",
          "aceita": [
            "The game which I love is old."
          ],
          "d": "Dica: coisa = <b>that</b> ou <b>which</b>, não who."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The jungle is the place which we play.",
          "r": "The jungle is the place where we play.",
          "aceita": [],
          "d": "Dica: lugar = <b>where</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/01a7365950cd/the-level-where-you-lose-a-life/img/live-selva.webp",
      "leg": "A jungle by a quiet river",
      "pede": "Look at the picture: a jungle by a quiet river. Write 2 or 3 sentences about a place, a person or a thing in a game, a book or a film you like. Use <b>who</b>, <b>that</b> or <b>where</b>.",
      "ph": "It is a place where … There is a girl who …",
      "ex": "It is a jungle where the rivers are green. There is an explorer who has a map. She finds a door that opens with a key."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who is a person that makes you laugh?",
          "ph": "My … is a person who …",
          "ex": "My brother is a person who makes silly jokes every day."
        },
        {
          "q": "What is a place where you feel calm?",
          "ph": "It is a place where …",
          "ex": "It is a small park where I can read and drink coffee."
        }
      ]
    }
  }
};
