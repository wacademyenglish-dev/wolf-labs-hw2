/* MY INBOX IS FULL · SELLING SERVICES LESSON 23 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: have to / need to + verb (has to in the 3rd person), don’t have to = not necessary; never “I need send”, “I have that”, “she have to”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-my-inbox-is-full",
  "titulo": "My Inbox Is Full",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "have to / need to + verb (has to in the 3rd person), don’t have to = not necessary; never “I need send”, “I have that”, “she have to”",
  "abrir": "Forty e-mails on Monday. What do you have to do first?",
  "fecho": "Necessary: <b>have to / need to + verb</b> (<i>she has to</i>). Not necessary: <b>don’t have to</b>. <i>I have to answer the CFO. You don’t have to come.</i>",
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
      "sub": "Mia, a seller, calls a client about his urgent request. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A laptop full of e-mails on a desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo, it’s Mia. I got your e-mail. What do you need?"
        },
        {
          "quem": "leo",
          "t": "We need to see the new price today, before 3 p.m."
        },
        {
          "quem": "mia",
          "t": "OK. I have to talk to my manager first."
        },
        {
          "quem": "leo",
          "t": "Does she have to approve it?"
        },
        {
          "quem": "mia",
          "t": "Yes, she has to approve every discount."
        },
        {
          "quem": "leo",
          "t": "And the contract? Do I have to sign it today?"
        },
        {
          "quem": "mia",
          "t": "No, you don’t have to sign it today. Next week is fine."
        },
        {
          "quem": "leo",
          "t": "Good. I need to show the price to my CFO."
        },
        {
          "quem": "mia",
          "t": "No problem. You’re going to have it before 3."
        }
      ],
      "perguntas": [
        {
          "q": "When does Leo need the new price?",
          "op": [
            "Today, before 3 p.m.",
            "Next week",
            "Tomorrow morning"
          ],
          "a": 0,
          "por": "We need to see the new price today, before 3 p.m."
        },
        {
          "q": "Who has to approve the discount?",
          "op": [
            "Mia’s manager",
            "Leo’s CFO",
            "Mia"
          ],
          "a": 0,
          "por": "Yes, she has to approve every discount."
        },
        {
          "q": "Does Leo have to sign the contract today?",
          "op": [
            "No. Next week is fine.",
            "Yes, before 3 p.m.",
            "Yes, with his CFO."
          ],
          "a": 0,
          "por": "No, you don’t have to sign it today. Next week is fine."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "I have to answer the CFO today.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You don’t have to sign it today.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My manager has to approve the discount.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Necessary: <b>have to / need to + verb</b> · he, she, it: <b>has to</b> · not necessary: <i>don’t have to</i> · question: <i>Do I have to…?</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I have to answer the CFO today.",
          "aceita": [],
          "d": "Dica: “tenho que” = <b>I have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I need send the proposal.",
          "r": "I need to send the proposal.",
          "aceita": [],
          "d": "Dica: <b>need to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She have to approve it.",
          "r": "She has to approve it.",
          "aceita": [],
          "d": "Dica: she → <b>has to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have that call him.",
          "r": "I have to call him.",
          "aceita": [],
          "d": "Dica: “ter que” = <b>have to</b>, nunca “have that”."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A laptop full of e-mails on a desk at night",
      "pede": "A client writes: “Can we meet on Friday?” Write a short reply: what you have to do, and what is not necessary.",
      "ph": "Hi …, Friday is … I have to … You don’t have to …",
      "ex": "Hi Tom, Friday is perfect. I have to confirm the time with my manager. You don’t have to prepare anything."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you have to do this week?",
          "ph": "I have to …",
          "ex": "I have to send two proposals and visit a client."
        },
        {
          "q": "What don’t you have to do on weekends?",
          "ph": "On weekends, I don’t have to …",
          "ex": "On weekends, I don’t have to wake up early."
        }
      ]
    }
  }
};
