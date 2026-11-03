/* THE EXCHANGE QUEUE · GLOBAL PAYMENTS ENGLISH LESSON 2 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: is / are + status, amounts, currencies, value dates. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-the-exchange-queue",
  "titulo": "The Exchange Queue",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "is / are + status, amounts, currencies, value dates",
  "abrir": "Your manager asks: “What’s the status of FX-20482?” What do you say?",
  "fecho": "One payment <b>is</b>, two payments <b>are</b>. 8,750.50 = eight <b>thousand</b>. 12 MAY = May <b>twelfth</b>.",
  "elenco": {
    "rachel": {
      "nome": "Rachel",
      "voz": "en-GB-SoniaNeural",
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
      "sub": "Rachel from London asks about a payment. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A call from the London office",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "rachel",
          "t": "Hi Ana. What’s the status of FX-20487?"
        },
        {
          "quem": "ana",
          "t": "One moment, please. I’m checking. It’s pending."
        },
        {
          "quem": "rachel",
          "t": "What’s the amount?"
        },
        {
          "quem": "ana",
          "t": "The amount is nine thousand, nine hundred and ninety-nine dollars."
        },
        {
          "quem": "rachel",
          "t": "And the value date?"
        },
        {
          "quem": "ana",
          "t": "The value date is May fourteenth."
        }
      ],
      "perguntas": [
        {
          "q": "What’s the status of FX-20487?",
          "op": [
            "It’s pending.",
            "It’s on hold.",
            "It’s released."
          ],
          "a": 0,
          "por": "It’s pending."
        },
        {
          "q": "What’s the currency?",
          "op": [
            "Dollars",
            "Euros",
            "Pounds"
          ],
          "a": 0,
          "por": "nine thousand, nine hundred and ninety-nine dollars"
        },
        {
          "q": "What’s the value date?",
          "op": [
            "May fourteenth",
            "May fourth",
            "May twelfth"
          ],
          "a": 0,
          "por": "The value date is May fourteenth."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "What’s the status?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The payment is on hold.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The value date is May twelfth.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "One payment <b>is</b> · two payments <b>are</b> · <b>thousand</b> without s · dates: May <b>twelfth</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Two payments are pending.",
          "aceita": [],
          "d": "Dica: dois pagamentos → <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The payment on hold.",
          "r": "The payment is on hold.",
          "aceita": [],
          "d": "Dica: falta o verbo: o pagamento <b>está</b> retido."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Three payments is pending.",
          "r": "Three payments are pending.",
          "aceita": [],
          "d": "Dica: plural → <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The amount is twenty thousands dollars.",
          "r": "The amount is twenty thousand dollars.",
          "aceita": [],
          "d": "Dica: depois de número, <b>thousand</b> sem s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A queue of payments at night",
      "pede": "Write the status of one payment: status, amount, value date.",
      "ph": "FX-… is … The amount is … The value date is …",
      "ex": "FX-20481 is pending. The amount is 25,000 dollars. The value date is May twelfth."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many payments are in your queue today?",
          "ph": "There are … / About …",
          "ex": "About thirty. It’s a busy day."
        },
        {
          "q": "What is the main currency in your job?",
          "ph": "The main currency is …",
          "ex": "The main currency is dollars."
        }
      ]
    }
  }
};
