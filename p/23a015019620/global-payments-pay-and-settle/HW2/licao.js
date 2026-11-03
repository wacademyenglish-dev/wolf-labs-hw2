/* UNIT: PAY AND SETTLE · GLOBAL PAYMENTS ENGLISH LESSON 4 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: imperatives on screens + can / can’t + the reason. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-pay-and-settle",
  "titulo": "Unit: Pay and Settle",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "imperatives on screens + can / can’t + the reason",
  "abrir": "Your manager asks: “Can you settle FX-20484 today?” The BIC is invalid. What do you say?",
  "fecho": "<b>Select. Confirm. Settle.</b> (the verb first) · I <b>can</b> settle it. · I <b>can’t</b> settle it. The BIC is invalid.",
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
      "sub": "Paul asks Ana about two payments. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "The settlement screen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "paul",
          "t": "Ana, can you settle FX-20487 today?"
        },
        {
          "quem": "ana",
          "t": "No, I can’t. The funds are insufficient."
        },
        {
          "quem": "paul",
          "t": "OK. Can you settle FX-20483?"
        },
        {
          "quem": "ana",
          "t": "Yes, I can. One moment, please."
        },
        {
          "quem": "ana",
          "t": "OK. FX-20483 is released."
        },
        {
          "quem": "paul",
          "t": "Great. Thank you."
        }
      ],
      "perguntas": [
        {
          "q": "Can Ana settle FX-20487?",
          "op": [
            "No, she can’t.",
            "Yes, she can.",
            "Tomorrow."
          ],
          "a": 0,
          "por": "No, I can’t. The funds are insufficient."
        },
        {
          "q": "What is the problem with FX-20487?",
          "op": [
            "Insufficient funds",
            "Invalid BIC",
            "Cut-off time"
          ],
          "a": 0,
          "por": "The funds are insufficient."
        },
        {
          "q": "What’s the status of FX-20483 now?",
          "op": [
            "Released",
            "On hold",
            "Pending"
          ],
          "a": 0,
          "por": "FX-20483 is released."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "Select the payment. Confirm.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I can’t settle it. The BIC is invalid.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can fix it today.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Button = verb first: <b>Select</b> … · <b>can</b> + verb (no to) · <b>can’t</b> + the reason.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I can’t settle it.",
          "aceita": [],
          "d": "Dica: can’t + verbo, sem “to”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I can to settle it.",
          "r": "I can settle it.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, sem “to”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I no can settle it.",
          "r": "I can’t settle it.",
          "aceita": [
            "I cannot settle it."
          ],
          "d": "Dica: negativo = <b>can’t</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The BIC invalid.",
          "r": "The BIC is invalid.",
          "aceita": [],
          "d": "Dica: falta o <b>is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A green confirm button",
      "pede": "Write a note to your manager: one payment you can settle, one you can’t (and why).",
      "ph": "I can settle … I can’t settle … The … is …",
      "ex": "I can settle FX-20483. I can’t settle FX-20484. The BIC is invalid."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Can you work from home?",
          "ph": "Yes, I can. / No, I can’t.",
          "ex": "Yes, I can. On Fridays."
        },
        {
          "q": "What is the most common error in your job?",
          "ph": "The most common error is …",
          "ex": "The most common error is missing information."
        }
      ]
    }
  }
};
