/* ROCKET MAN · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: contact clauses. Linha de música: NENHUM verso aqui; o listening é diálogo original. B1: nenhum português. */
window.HW2 = {
  "id": "rocket-man",
  "titulo": "Rocket Man",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/249f8e76b8a2/rocket-man/img/live-capa.webp",
  "alvo": "contact clauses: you can drop that / who / which when it is the object of the relative clause (the engineer I work with, the city I live in); keep it when it is the subject (the man who lives here); never repeat the object (the movie I watched it); keep the preposition at the end",
  "abrir": "What is the best place you have ever been to?",
  "fecho": "You can drop <b>that / who / which</b> when it is the <b>object</b>: <i>the engineer (that) I work with.</i> If it is the <b>subject</b>, keep it: <i>the man who lives here.</i> Never repeat the object: <i>the movie I watched it</i> is wrong. Keep the preposition: <i>the city I live in.</i>",
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
      "sub": "Mia and Leo in a control room before a long work trip. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/249f8e76b8a2/rocket-man/img/live-controle.webp",
      "leg": "A control room facing the Earth",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, this is the control room I told you about."
        },
        {
          "quem": "mia",
          "t": "It looks amazing. Who is the woman you were talking to?"
        },
        {
          "quem": "leo",
          "t": "That's Anna, the engineer I work with. She's the one who builds the engines."
        },
        {
          "quem": "mia",
          "t": "And the trip you're going on? How long is it?"
        },
        {
          "quem": "leo",
          "t": "Six months. The mission I applied for was my dream job, but the flat I'm leaving is my home."
        },
        {
          "quem": "mia",
          "t": "Is it hard? Packing everything you need?"
        },
        {
          "quem": "leo",
          "t": "A bit. The thing I'll need most is my own coffee. The coffee they serve up there is awful."
        },
        {
          "quem": "mia",
          "t": "Then take the coffee machine you bought last year."
        },
        {
          "quem": "leo",
          "t": "Good idea. The people who pack the cargo will love it."
        }
      ],
      "perguntas": [
        {
          "q": "Who is Anna?",
          "op": [
            "The engineer Leo works with",
            "The pilot of the trip",
            "Mia's friend"
          ],
          "a": 0,
          "por": "That's Anna, the engineer I work with."
        },
        {
          "q": "How long is the trip?",
          "op": [
            "Six months",
            "Six weeks",
            "Six years"
          ],
          "a": 0,
          "por": "Six months."
        },
        {
          "q": "What will Leo take with him?",
          "op": [
            "The coffee machine he bought last year",
            "His old kitchen table",
            "A map he drew"
          ],
          "a": 0,
          "por": "Take the coffee machine you bought last year."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with a relative clause. Hear it, then say it.",
      "frases": [
        {
          "t": "This is the control room I worked in last year.",
          "img": "https://wolf-labs.pages.dev/p/249f8e76b8a2/rocket-man/img/live-controle.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The red planet we are looking at is very cold.",
          "img": "https://wolf-labs.pages.dev/p/249f8e76b8a2/rocket-man/img/live-marte.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The road you drove on last night was empty.",
          "img": "https://wolf-labs.pages.dev/p/249f8e76b8a2/rocket-man/img/live-estrada.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Keep it, drop it, or fix it. Four quick ones.",
      "regra": "<b>object</b> → you can drop <b>that / who / which</b> (the man I met) · <b>subject</b> → keep it (the man who lives here) · never repeat <b>it</b> · keep the preposition.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The engineer I work with is very smart.",
          "aceita": [],
          "d": "Hint: no <b>who</b> needed, and <b>with</b> stays at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "The movie that I watched it was great.",
          "r": "The movie I watched was great.",
          "aceita": [
            "The movie that I watched was great."
          ],
          "d": "Hint: <b>that</b> already stands for the movie, so <b>it</b> is not needed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The man lives here is a pilot.",
          "r": "The man who lives here is a pilot.",
          "aceita": [
            "The man that lives here is a pilot."
          ],
          "d": "Hint: <b>the man</b> is the subject of <b>lives</b>, so you must keep <b>who</b> or <b>that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The city I live is very big.",
          "r": "The city I live in is very big.",
          "aceita": [
            "The city that I live in is very big.",
            "The city where I live is very big."
          ],
          "d": "Hint: the preposition <b>in</b> stays at the end: <b>live in</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/249f8e76b8a2/rocket-man/img/live-estrada.webp",
      "leg": "A long road at night",
      "pede": "Look at the picture: a long road at night under the stars. Write 2 or 3 sentences about a trip or a job away from home. Use a relative clause without <b>that</b>: <b>the road I took</b>, <b>the people I met</b>.",
      "ph": "The road I took was … The people I met …",
      "ex": "The road I took was long and empty. The people I met on the trip were very kind. The first thing I did was find a hot coffee."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a place you have visited. What was the best thing you saw or ate there?",
          "ph": "The best thing I saw was …",
          "ex": "The best thing I saw was a big old church. The food I tried there was amazing."
        },
        {
          "q": "Who is a person you admire? What is the thing you like most about them?",
          "ph": "The person I admire most is …",
          "ex": "The person I admire most is my aunt. The thing I like about her is that she never gives up."
        }
      ]
    }
  }
};
