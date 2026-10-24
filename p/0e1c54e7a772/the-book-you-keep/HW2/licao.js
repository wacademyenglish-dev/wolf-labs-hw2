/* THE BOOK YOU KEEP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: defining relative clauses. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-book-you-keep",
  "titulo": "The Book You Keep",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0e1c54e7a772/the-book-you-keep/img/live-estante.webp",
  "alvo": "defining relative clauses: who for people, that for things, where for places; that can drop before a new subject (the book you keep) but where stays; never the book what, the place that I live, a man which writes",
  "abrir": "Is there a book you have kept for years? What is it about?",
  "fecho": "<b>who</b> = person · <b>that</b> = thing · <b>where</b> = place. <i>the book (that) you keep</i>: that can go before a new subject. <b>Where</b> stays. Never <i>the book what</i>.",
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
      "sub": "Mia and Leo talk about a favorite book. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/0e1c54e7a772/the-book-you-keep/img/live-livro.webp",
      "leg": "A book under a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what's the book you keep by your bed?"
        },
        {
          "quem": "mia",
          "t": "It's a book that my father read to me. It's about a girl who lives in a lighthouse."
        },
        {
          "quem": "leo",
          "t": "Who gave it to you?"
        },
        {
          "quem": "mia",
          "t": "A friend gave it to me. She's the friend who works at the old bookshop."
        },
        {
          "quem": "leo",
          "t": "The bookshop where you found your first book?"
        },
        {
          "quem": "mia",
          "t": "Yes! It's the shop where I found everything I love."
        },
        {
          "quem": "leo",
          "t": "I want a book that makes me laugh."
        },
        {
          "quem": "mia",
          "t": "Then let's go to the shop. I know the person who can help."
        }
      ],
      "perguntas": [
        {
          "q": "What is the book about?",
          "op": [
            "A girl who lives in a lighthouse",
            "A boy who finds a dog",
            "A shop where books are cheap"
          ],
          "a": 0,
          "por": "It's about a girl who lives in a lighthouse."
        },
        {
          "q": "Who works at the old bookshop?",
          "op": [
            "Mia's friend",
            "Mia's father",
            "Leo"
          ],
          "a": 0,
          "por": "She's the friend who works at the old bookshop."
        },
        {
          "q": "Where did Mia find her first book?",
          "op": [
            "At the old bookshop",
            "At school",
            "At home"
          ],
          "a": 0,
          "por": "The bookshop where you found your first book? Yes!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences with who, that or where. Hear it, then say it.",
      "frases": [
        {
          "t": "It's a book that I keep by my bed.",
          "img": "https://wolf-labs.pages.dev/p/0e1c54e7a772/the-book-you-keep/img/live-livro.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She is a friend who loves old books.",
          "img": "https://wolf-labs.pages.dev/p/0e1c54e7a772/the-book-you-keep/img/live-fundo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "This is the shop where I found it.",
          "img": "https://wolf-labs.pages.dev/p/0e1c54e7a772/the-book-you-keep/img/live-estante.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Who, that or where? Four quick ones.",
      "regra": "<b>who</b> = person · <b>that</b> = thing · <b>where</b> = place · never <b>what</b> · never <b>the place that I live</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is the friend who gave me this book.",
          "aceita": [],
          "d": "Dica: pessoa = <b>who</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's a book what I keep.",
          "r": "It's a book that I keep.",
          "aceita": [],
          "d": "Dica: <b>what</b> não liga o substantivo: use <b>that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This is the place that I live.",
          "r": "This is the place where I live.",
          "aceita": [],
          "d": "Dica: lugar = <b>where</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is a man which writes novels.",
          "r": "He is a man who writes novels.",
          "aceita": [],
          "d": "Dica: pessoa = <b>who</b>, nunca 'which'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0e1c54e7a772/the-book-you-keep/img/live-estante.webp",
      "leg": "A shelf full of books",
      "pede": "Look at the picture: a shelf of books. Write 2 or 3 sentences about a book you know, without its name. Use <b>that</b>, <b>who</b> or <b>where</b>.",
      "ph": "It's a book that …",
      "ex": "It's a book that my mother gave me. It's about a boy who loves the sea. I read it in a room where it's always quiet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe a person you like. Don't say the name.",
          "ph": "She is a friend who …",
          "ex": "She is a friend who always makes me laugh."
        },
        {
          "q": "Describe a place you love. Don't say the name.",
          "ph": "It's a place where …",
          "ex": "It's a place where nobody talks, and the coffee is cheap."
        }
      ]
    }
  }
};
