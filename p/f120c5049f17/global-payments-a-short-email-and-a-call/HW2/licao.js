/* A SHORT EMAIL AND A CALL · GLOBAL PAYMENTS ENGLISH LESSON 5 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Can you …, please? + the three-line email + the Core 10. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-a-short-email-and-a-call",
  "titulo": "A Short Email and a Call",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "Can you …, please? + the three-line email + the Core 10",
  "abrir": "A payment is on hold. The invoice is missing. What do you write to the client?",
  "fecho": "<b>Can you</b> send the invoice, <b>please</b>? · Email: <b>Dear</b> … · problem · request · <b>Best regards</b>.",
  "elenco": {
    "sarah": {
      "nome": "Sarah",
      "voz": "en-US-EmmaNeural",
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
      "sub": "Ana calls the client about the invoice. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A phone on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "sarah",
          "t": "Hello, Vela Foods, Sarah speaking."
        },
        {
          "quem": "ana",
          "t": "Hi Sarah, this is Ana. The payment FX-20482 is on hold."
        },
        {
          "quem": "sarah",
          "t": "Oh. What’s the problem?"
        },
        {
          "quem": "ana",
          "t": "The invoice is missing. Can you send it, please?"
        },
        {
          "quem": "sarah",
          "t": "Yes, I can. I can send it today."
        },
        {
          "quem": "ana",
          "t": "Thank you. I’ll check and confirm."
        }
      ],
      "perguntas": [
        {
          "q": "Why is the payment on hold?",
          "op": [
            "The invoice is missing.",
            "The BIC is invalid.",
            "The cut-off time passed."
          ],
          "a": 0,
          "por": "The invoice is missing."
        },
        {
          "q": "What does Ana ask?",
          "op": [
            "Can you send it, please?",
            "Can you spell that?",
            "What’s the status?"
          ],
          "a": 0,
          "por": "Can you send it, please?"
        },
        {
          "q": "When can Sarah send it?",
          "op": [
            "Today",
            "Tomorrow",
            "On Friday"
          ],
          "a": 0,
          "por": "I can send it today."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "Can you send the invoice, please?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The payment is on hold.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Thank you. I’ll check and confirm.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Ask nicely: <b>Can you</b> + verb + <b>please</b>? · Email: <b>Dear</b> … / <b>Best regards</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can you send the invoice, please?",
          "aceita": [],
          "d": "Dica: Can you + send + the invoice + please?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You send the invoice.",
          "r": "Can you send the invoice, please?",
          "aceita": [
            "Can you send the invoice please?"
          ],
          "d": "Dica: pedido educado: <b>Can you</b> …, <b>please</b>?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you to check the BIC?",
          "r": "Can you check the BIC?",
          "aceita": [
            "Can you check the BIC, please?"
          ],
          "d": "Dica: depois de can, sem “to”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The payment on hold.",
          "r": "The payment is on hold.",
          "aceita": [],
          "d": "Dica: falta o <b>is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "Paper and envelopes on a dark desk",
      "pede": "Write a 3-line email to a client: the problem, the request, thank you.",
      "ph": "Dear …, The payment … Can you …, please? Best regards,",
      "ex": "Dear Ms. Cole, The payment FX-20482 is on hold. Can you send the invoice, please? Best regards, Ana"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How many emails do you write in English every week?",
          "ph": "About … / A lot. / A few.",
          "ex": "About ten. A few every day."
        },
        {
          "q": "Can you call a client in English now?",
          "ph": "Yes, I can. / Not yet.",
          "ex": "Not yet, but I can write an email!"
        }
      ]
    }
  }
};
