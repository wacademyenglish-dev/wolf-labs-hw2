/* I’D LIKE TO CONNECT · SELLING SERVICES LESSON 21 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: polite wishes and invitations: I’d like to… / Would you like to…? / I’d love to / I’d like to, but…. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-id-like-to-connect",
  "titulo": "I’d Like to Connect",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "polite wishes and invitations: I’d like to… / Would you like to…? / I’d love to / I’d like to, but…",
  "abrir": "You want a meeting with a new client. How do you invite him politely?",
  "fecho": "Polite and short: <b>I’d like to connect.</b> · <b>Would you like to have a call?</b> · <b>Yes, I’d love to.</b> · <b>I’d like to, but…</b>",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia answers a LinkedIn message by phone. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A phone showing a chat message on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, Leo. It’s Mia, from Northfield Hotels. I saw your message."
        },
        {
          "quem": "leo",
          "t": "Hi, Mia! Thanks. I’d like to show you our accounting service."
        },
        {
          "quem": "mia",
          "t": "OK. What do you do?"
        },
        {
          "quem": "leo",
          "t": "We do accounting for hotels. Would you like to have a short call next week?"
        },
        {
          "quem": "mia",
          "t": "I’d like to, but next week I’m on a trip."
        },
        {
          "quem": "leo",
          "t": "No problem. Would you like a short video first?"
        },
        {
          "quem": "mia",
          "t": "Yes, I’d love to watch it."
        },
        {
          "quem": "leo",
          "t": "Great. And would you like to talk on the 20th?"
        },
        {
          "quem": "mia",
          "t": "Yes, the 20th is perfect."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo’s company do?",
          "op": [
            "Accounting for hotels",
            "Payroll for banks",
            "IT for schools"
          ],
          "a": 0,
          "por": "We do accounting for hotels."
        },
        {
          "q": "Why can’t Mia have a call next week?",
          "op": [
            "She’s on a trip",
            "She doesn’t like calls",
            "She has no budget"
          ],
          "a": 0,
          "por": "Next week I’m on a trip."
        },
        {
          "q": "What does Leo offer first?",
          "op": [
            "A short video",
            "A free month",
            "A lunch"
          ],
          "a": 0,
          "por": "Would you like a short video first?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "I’d like to connect with you.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Would you like to have a 15-minute call?",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I’d like to, but I’m busy this week.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>I’d like to</b> + verb (now, polite) · <b>Would you like to…?</b> · Yes, <b>I’d love to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Would you like to meet next week?",
          "aceita": [],
          "d": "Dica: o convite começa com <b>Would you like to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’d like connect with you.",
          "r": "I’d like to connect with you.",
          "aceita": [
            "I would like to connect with you."
          ],
          "d": "Dica: <b>would like + to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you would like a case study?",
          "r": "Would you like a case study?",
          "aceita": [],
          "d": "Dica: sem “do”: <b>Would you like…?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Yes, I like.",
          "r": "Yes, I’d love to.",
          "aceita": [
            "Yes, please.",
            "Yes, I would love to.",
            "Yes, I’d love to"
          ],
          "d": "Dica: aceitar convite: <b>I’d love to</b> / <b>Yes, please</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A laptop with a chat window open",
      "pede": "Write a LinkedIn message to a new client: connect, one line about you, and one invitation.",
      "ph": "Hi …, I’d like to connect with you. I … Would you like to …?",
      "ex": "Hi Grace, I’d like to connect with you. I work with payroll for hotels. Would you like a short case study?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you like to do next weekend?",
          "ph": "I’d like to …",
          "ex": "I’d like to go to the beach with my family."
        },
        {
          "q": "Would you like to work in another country? Where?",
          "ph": "Yes, I’d love to … · No, I wouldn’t, because …",
          "ex": "Yes, I’d love to work in Canada for one year."
        }
      ]
    }
  }
};
