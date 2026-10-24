/* WHAT DO YOU CALL IT? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: a thing you use to / a place where / a person who. B1: nenhum português. Só live-capa (a live-prox, estádio claro, ficou de fora). */
window.HW2 = {
  "id": "what-do-you-call-it",
  "titulo": "What Do You Call It?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7ca2c4bfe80d/what-do-you-call-it/img/live-capa.jpg",
  "alvo": "explaining a word you forgot: a thing you use to + verb · a place where + clause · a person who + verb; What do you call ...?",
  "abrir": "Which English word do you always forget?",
  "fecho": "Forgot a word? Explain it. A thing: <b>a thing you use to</b> + verb (<i>a thing you use to open a bottle</i>). A place: <b>a place where</b> + clause (<i>a place where you buy bread</i>). A person: <b>a person who</b> + verb (<i>a person who fixes cars</i>). Ask: <i>What do you call …?</i>",
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
      "sub": "Mia and Leo talk about forgotten words. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7ca2c4bfe80d/what-do-you-call-it/img/live-capa.jpg",
      "leg": "A desk with headphones, a calendar and a notebook",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your trip? I heard you couldn't find the word for the shop."
        },
        {
          "quem": "mia",
          "t": "Don't remind me! I wanted to find a bakery, but I forgot the word."
        },
        {
          "quem": "leo",
          "t": "So what did you do?"
        },
        {
          "quem": "mia",
          "t": "I said, it's a place where you buy bread. The woman understood immediately."
        },
        {
          "quem": "leo",
          "t": "Nice trick. Last week I forgot the word for stapler at work."
        },
        {
          "quem": "mia",
          "t": "And what did you say?"
        },
        {
          "quem": "leo",
          "t": "I said, it's a thing you use to join papers together. My boss said, oh, you mean a stapler!"
        },
        {
          "quem": "mia",
          "t": "See? You don't need the exact word. Just say what it does, where it is, or who does it."
        },
        {
          "quem": "leo",
          "t": "Right. What do you call a person who fixes the pipes in your kitchen?"
        },
        {
          "quem": "mia",
          "t": "A plumber!"
        },
        {
          "quem": "leo",
          "t": "Of course. Why do I always forget that one?"
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia want to find on her trip?",
          "op": [
            "A bakery",
            "A bank",
            "A bus stop"
          ],
          "a": 0,
          "por": "I wanted to find a bakery, but I forgot the word."
        },
        {
          "q": "How did Mia explain the word?",
          "op": [
            "It's a place where you buy bread",
            "It's a person who makes bread",
            "It's a thing you use to cut bread"
          ],
          "a": 0,
          "por": "I said, it's a place where you buy bread."
        },
        {
          "q": "Which word did Leo forget at work?",
          "op": [
            "Stapler",
            "Printer",
            "Calendar"
          ],
          "a": 0,
          "por": "Last week I forgot the word for stapler at work."
        }
      ]
    },
    "out": {
      "sub": "Three ways to explain a word. Hear it, then say it.",
      "frases": [
        {
          "t": "It's a place where you buy bread.",
          "img": "https://wolf-labs.pages.dev/p/7ca2c4bfe80d/what-do-you-call-it/img/live-capa.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It's a person who fixes the pipes in your kitchen.",
          "img": "https://wolf-labs.pages.dev/p/7ca2c4bfe80d/what-do-you-call-it/img/live-capa.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It's a thing you use to join papers together.",
          "img": "https://wolf-labs.pages.dev/p/7ca2c4bfe80d/what-do-you-call-it/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "a thing you use to, a place where, a person who. Four quick ones.",
      "regra": "<b>a thing you use to</b> + verb · <b>a place where</b> + clause · <b>a person who</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It's a place where you can buy fresh bread.",
          "aceita": [],
          "d": "Hint: for a place, <b>a place where</b> + you + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a person which teaches children.",
          "r": "It's a person who teaches children.",
          "aceita": [
            "It is a person who teaches children."
          ],
          "d": "Hint: for people, use <b>who</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a place that you watch movies.",
          "r": "It's a place where you watch movies.",
          "aceita": [
            "It is a place where you watch movies."
          ],
          "d": "Hint: for a place, use <b>where</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a thing you use for open a bottle.",
          "r": "It's a thing you use to open a bottle.",
          "aceita": [
            "It is a thing you use to open a bottle.",
            "It's a thing that you use to open a bottle."
          ],
          "d": "Hint: <b>a thing you use to</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7ca2c4bfe80d/what-do-you-call-it/img/live-capa.jpg",
      "leg": "A desk with headphones, a calendar and a notebook",
      "pede": "Look at the picture: a desk with headphones, a calendar and a notebook. Choose two things and explain each one to someone who doesn't know the word. Write 2 or 3 sentences. Use <b>a thing you use to</b>, <b>a place where</b> or <b>a person who</b>.",
      "ph": "It's a thing you use to …",
      "ex": "It's a thing you use to listen to music without bothering anyone. It's a place where I study when I'm at home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which English word do you always forget? Explain it.",
          "ph": "I always forget the word for … It's a thing you use to …",
          "ex": "I always forget the word for screwdriver. It's a thing you use to turn screws."
        },
        {
          "q": "Explain your favorite place to a stranger.",
          "ph": "It's a place where …",
          "ex": "It's a place where I walk and relax after work. It has a lot of trees."
        }
      ]
    }
  }
};
