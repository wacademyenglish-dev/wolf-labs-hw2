/* THERE ARE EIGHT PAYMENTS · GLOBAL PAYMENTS ENGLISH LESSON 8 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: there is / there are + How many …? + Is there …?. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-there-are-eight-payments",
  "titulo": "There Are Eight Payments",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "there is / there are + How many …? + Is there …?",
  "abrir": "Your manager asks: “How many payments are on hold?” There is one. What do you say?",
  "fecho": "One: <b>there is</b>. Two or more: <b>there are</b>. Question: <b>How many</b> … <b>are there</b>? · <b>Is there</b> …?",
  "elenco": {
    "paul": {
      "nome": "Paul",
      "voz": "en-US-GuyNeural",
      "cor": "#86c9f0"
    },
    "ana": {
      "nome": "Ana",
      "voz": "en-US-AvaNeural",
      "cor": "#b9a6e8"
    }
  },
  "rate": "-15%",
  "rodadas": {
    "listen": {
      "sub": "Paul asks for the numbers. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "An archive of dark folders",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "paul",
          "t": "Ana, how many payments are there today?"
        },
        {
          "quem": "ana",
          "t": "There are eight payments."
        },
        {
          "quem": "paul",
          "t": "Is there a payment in yen?"
        },
        {
          "quem": "ana",
          "t": "Yes, there is. There is one in yen."
        },
        {
          "quem": "paul",
          "t": "And in reais?"
        },
        {
          "quem": "ana",
          "t": "No, there aren’t any payments in reais."
        }
      ],
      "perguntas": [
        {
          "q": "How many payments are there?",
          "op": [
            "Eight",
            "Eighteen",
            "Three"
          ],
          "a": 0,
          "por": "There are eight payments."
        },
        {
          "q": "Is there a payment in yen?",
          "op": [
            "Yes, there is one.",
            "No, there isn’t.",
            "There are two."
          ],
          "a": 0,
          "por": "Yes, there is. There is one in yen."
        },
        {
          "q": "Are there payments in reais?",
          "op": [
            "No, there aren’t any.",
            "Yes, there are two.",
            "Yes, one."
          ],
          "a": 0,
          "por": "No, there aren’t any payments in reais."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "There is one payment on hold.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There are three payments pending.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How many payments are there in euros?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "“Tem” = <b>there is</b> (1) / <b>there are</b> (2+) · <b>How many</b> … <b>are there</b>?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There are three payments pending.",
          "aceita": [],
          "d": "Dica: três → <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Have one payment on hold.",
          "r": "There is one payment on hold.",
          "aceita": [],
          "d": "Dica: “tem” de existir = <b>there is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "There is two payments in euros.",
          "r": "There are two payments in euros.",
          "aceita": [],
          "d": "Dica: dois → <b>there are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "How many payments there are?",
          "r": "How many payments are there?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>are there</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "Colored sticky notes on a desk",
      "pede": "Write a short end-of-day report: the total, one status, one thing that isn’t there.",
      "ph": "There are … There is … There aren’t any …",
      "ex": "There are eight payments today. There is one payment on hold. There aren’t any payments in reais."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many people are there in your team?",
          "ph": "There are …",
          "ex": "There are six people in my team."
        },
        {
          "q": "Is there a meeting room near your desk?",
          "ph": "Yes, there is. / No, there isn’t.",
          "ex": "Yes, there is. It’s small."
        }
      ]
    }
  }
};
